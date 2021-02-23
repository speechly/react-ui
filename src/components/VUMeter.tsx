import { useSpeechContext, SpeechState } from '@speechly/react-client'
import { useEffect, useRef } from 'react'

const getPixelRatio = (context: any) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1

  return (window.devicePixelRatio || 1) / backingStore
}

const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) => {
  if (width < 2 * radius) radius = width / 2
  if (height < 2 * radius) radius = height / 2
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.arcTo(x + width, y, x + width, y + height, radius)
  ctx.arcTo(x + width, y + height, x, y + height, radius)
  ctx.arcTo(x, y + height, x, y, radius)
  ctx.arcTo(x, y, x + width, y, radius)
  ctx.closePath()
}

type IVUMeter = {
  updateVU: (level: number, seekTimeMs: number) => void
}

const VUMeter = () => {
  const { speechState, segment } = useSpeechContext()
  const ref = useRef<HTMLCanvasElement & IVUMeter>(null)

  useEffect(() => {
    let requestId: any
    let VUTarget = 0
    let VUUpdateTimeStamp = 0
    let VULevels: number[] = [0, 0]
    const numVUs = (VULevels.length - 1) * 2 + 1;
    const vuWidthWeight = 3;
    const vuGapWeight = 1;
    const totalWeight = vuWidthWeight * numVUs + vuGapWeight * (numVUs - 1);

    const SeekRatio = 0.15
    const DecayRatio = 0.25
    const AdoptRatio = 0.25
    const VUMinLevel = 0.25

    const canvas = ref.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    let ratio = getPixelRatio(context)
    let width = Number.parseInt(getComputedStyle(canvas).getPropertyValue('width').slice(0, -2))
    let height = Number.parseInt(getComputedStyle(canvas).getPropertyValue('height').slice(0, -2))
    canvas.width = width * ratio
    canvas.height = height * ratio

    canvas.updateVU = (level: number, seekTimeMs: number) => {
      if (Date.now() > VUUpdateTimeStamp) {
        VUTarget = level
      } else {
        VUTarget = Math.max(VUTarget, level)
      }
      VUUpdateTimeStamp = Date.now() + seekTimeMs
    }

    const render = () => {
      if (Date.now() < VUUpdateTimeStamp) {
        VULevels[0] = VUTarget * SeekRatio + VULevels[0] * (1.0 - SeekRatio)
      } else {
        VULevels[0] = VUMinLevel * DecayRatio + VULevels[0] * (1.0 - DecayRatio)
      }

      let i = 1
      while (i < VULevels.length) {
        VULevels[i] = VULevels[i - 1] * AdoptRatio + VULevels[i] * (1.0 - DecayRatio - AdoptRatio) + VUMinLevel * DecayRatio
        i++
      }

      context.clearRect(0, 0, canvas.width, canvas.height)
      //                canvas.style.width = `${width}px`;
      //                canvas.style.height = `${height}px`;

      const rad = vuWidthWeight / totalWeight * canvas.width * 0.5;
      const spacing = (vuGapWeight + vuWidthWeight) / totalWeight * canvas.width;
      context.fillStyle = canvas.style["color"] || "#000000";

      for (i = 0; i < VULevels.length; i++) {
        const l = VULevels[i] * canvas.height;
        // Right symmetrical VU
        if (l * canvas.height > 2 * rad) {
          roundRect(
            context,
            canvas.width * 0.5 - rad + i * spacing,
            (canvas.height - l) * 0.5,
            rad * 2,
            l,
            rad,
          )
        } else {
          context.beginPath()
          context.arc(canvas.width * 0.5 + i * spacing, canvas.height * 0.5, l * canvas.height * 0.5, 0, Math.PI * 2)
        }
        context.fill()
        // Left symmetrical VU
        if (i > 0) {
          if (l * canvas.height > 2 * rad) {
            roundRect(
              context,
              canvas.width * 0.5 - rad - i * spacing,
              (canvas.height - l) * 0.5,
              rad * 2,
              l,
              rad,
            )
          } else {
            context.beginPath()
            context.arc(canvas.width * 0.5 - i * spacing, canvas.height * 0.5, l * canvas.height * 0.5, 0, Math.PI * 2)
          }
          context.fill()
        }
      }
      requestId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [])

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      ref.current?.updateVU(1.0, 1000)
    }
  }, [speechState])

  useEffect(() => {
    if (segment) {
      ref.current?.updateVU(Math.random() * 0.50 + 0.50, Math.random() * 75 + 75)
    }
  }, [segment])

  return (
    <canvas ref={ref} style={{ display: "block", width: '1.35rem', height: '1.5rem', margin: "0 0.5rem 0 0", padding: "0", color: "#60e0ff" }} />
  )
}

export default VUMeter
