SNIPPETS=docs/snippets

# ----------- Build -----------------
TARGET=README.md

cat $SNIPPETS/$TARGET.header > $TARGET
cat index.md >> $TARGET
cat $SNIPPETS/$TARGET.footer >> $TARGET
