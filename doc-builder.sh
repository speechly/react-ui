DOCS=docs
SNIPPETS=docs/doc-snippets
BUILDS=docs/doc-build

# ----------- Build -----------------
TARGET=README.md

cat $SNIPPETS/$TARGET.header > $TARGET
cat $DOCS/react-ui.md >> $TARGET
cat $SNIPPETS/$TARGET.footer >> $TARGET

# ----------- Build -----------------
TARGET=_index.md

cat $SNIPPETS/$TARGET.header > $BUILDS/$TARGET
cat $DOCS/react-ui.md >> $BUILDS/$TARGET
cat $SNIPPETS/$TARGET.footer >> $BUILDS/$TARGET

