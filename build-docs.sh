# Do not edit files generated by this script directly:
#
# ./README.md <-- edit source file: ./index.md
#
# Then run this script: ./build-docs.sh

SNIPPETS=doc-snippets

# ----------- Build -----------------
TARGET=README.md

cat $SNIPPETS/$TARGET.header > $TARGET
cat index.md >> $TARGET
cat $SNIPPETS/$TARGET.footer >> $TARGET
