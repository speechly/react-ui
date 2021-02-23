import React, { useEffect } from 'react'
import { SpeechState, useSpeechContext } from '@speechly/react-client'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import VUMeter from './VUMeter'

/**
 * A React component that renders the transcript and entities received from Speechly SLU API.
 *
 * The component is intended to be used for providing visual feedback to the speaker.
 *
 * @public
 */
export const BigTranscript: React.FC = props => {
  const { segment, speechState } = useSpeechContext()
  const [ springProps, setSpringProps ] = useSpring(() => ({
    reveal: 0,
    to: {
      reveal: 0,
      maxHeight: '0rem',
      marginBottom: '0rem',
    },
  }))

  useEffect(() => {
    if (segment?.isFinal === true) {
      setSpringProps({
        to: async (next: any, cancel: any) => {
          await next({
            reveal: 0,
          })
          await next({
            maxHeight: '0rem',
            marginBottom: '0rem',
          })
        },
        delay: 2000,
        config: { tension: 200 },
      })
    } else {
    }
  }, [segment, setSpringProps])

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      console.log("Hoi hoi")
      setSpringProps({
        to: async (next: any, cancel: any) => {
          await next({
            reveal: 1,
            maxHeight: '10rem',
            marginBottom: '1.5rem',
          })
        },
        config: { tension: 500 },
      })
    }
  }, [speechState])

  // Assign words to a new list with original index (segments.words array indices may not correlate with entity.startIndex)
  let words: ITaggedWord[] = []

  if (segment !== undefined) {

    segment.words.forEach(w => {
      words[w.index] = { word: w.value, serialNumber: w.index, entityType: null, isFinal: w.isFinal }
    })

    // Tag words with entities
    segment.entities.forEach(e => {
      words.slice(e.startPosition, e.endPosition).forEach(w => {
        w.entityType = e.type
        w.isFinal = e.isFinal
      })
    })
  }

  // Remove holes from word array
  words = words.flat()

  // Combine words of same type into HTML element snippets
  return (
    <BigTranscriptDiv
      className="BigTranscript"
      style={{
        clipPath: springProps.reveal.interpolate(x => `polygon(-25% -50%, ${x as number * 150 - 25}% -50%, ${x as number * 150 - 25}% 150%, -25% 150%)`),
      }}
    >
      <TransscriptItem>
        <VUMeter/>&nbsp;{segment ? null : <span style={{opacity: 0.5}}>Listening</span>}
      </TransscriptItem>
      {words.map<React.ReactNode>((w, index) => {
        const key = `${segment?.contextId}/${segment?.id}/${index}`
        return (
          <span key={key}>
            <TransscriptItem word={w}>{w.word}&nbsp;</TransscriptItem>
          </span>
        )
      })}
    </BigTranscriptDiv>
  )
}

const TransscriptItem: React.FC<{ word?: ITaggedWord }> = props => {
  const [springProps] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 500 },
  }))

  const entityProps = useSpring({
    entityEffect: props.word?.entityType === null ? 0 : 1,
    config: { duration: 250 },
  })

  return (
    <TransscriptItemDiv className={`${props.word?.entityType === null ? '' : 'Entity'} ${props.word?.isFinal ? 'Final' : ''} ${props.word?.entityType ?? ''}`}>
      <TransscriptItemBgDiv style={springProps} />
      <TransscriptItemContent
        style={{
          ...springProps,
          transform: entityProps.entityEffect.interpolate(
            x => `translate3d(0, ${Math.sin((x as number) * Math.PI) * -5}px, 0)`,
          ),
        }}
      >
        {props.children}
      </TransscriptItemContent>
    </TransscriptItemDiv>
  )
}

const BigTranscriptDiv = styled(animated.div)`
  white-space: 'pre';
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const TransscriptItemDiv = styled(animated.div)`
  position: relative;
  white-space: pre;
  display: block;
`

const TransscriptItemContent = styled(animated.div)`
  z-index: 1;
  display: flex;
  align-items: center;
`

const TransscriptItemBgDiv = styled(animated.div)`
  position: absolute;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  margin: -0.5rem;
  padding: 0.5rem;
  background-color: #000;
  z-index: -1;
`

type ITaggedWord = {
  word: string
  serialNumber: number
  entityType: string | null
  isFinal: boolean
}
