#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

OUT_DIR="./src/proto"

# Path to this plugin, Note this must be an abolsute path on Windows (see #15)
PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"

mkdir -p "$OUT_DIR"

echo "Processing proto files ..."
PROTO_DIR="./proto"

protoc \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
  --ts_proto_out="${OUT_DIR}" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true,outputClientImpl=grpc-web" \
  --proto_path="$PROTO_DIR" \
  $(find ${PROTO_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)

echo "Completing proto files ..."
