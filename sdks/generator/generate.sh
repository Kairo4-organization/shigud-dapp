#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SPEC="$ROOT/dist/openapi.json"
CONFIGS="$ROOT/sdks/generator/configs"
READMES="$ROOT/sdks/generator/readmes"
OUT="$ROOT/sdks"

# Export fresh spec
echo "==> Exporting OpenAPI spec..."
cd "$ROOT" && pnpm openapi:export

if [ ! -f "$SPEC" ]; then
  echo "ERROR: $SPEC not found" >&2
  exit 1
fi

# Detect generator command (Docker in CI, npx locally)
if [ "${CI:-}" = "true" ]; then
  GEN="docker run --rm -v $ROOT:/workspace openapitools/openapi-generator-cli:v7.19.0"
  SPEC_PATH="/workspace/dist/openapi.json"
  CONFIG_PREFIX="/workspace/sdks/generator/configs"
  OUT_PREFIX="/workspace/sdks"
else
  GEN="npx @openapitools/openapi-generator-cli"
  SPEC_PATH="$SPEC"
  CONFIG_PREFIX="$CONFIGS"
  OUT_PREFIX="$OUT"
fi

LANGUAGES=("typescript" "python" "rust" "go")
GENERATORS=("typescript-fetch" "python" "rust" "go")

for i in "${!LANGUAGES[@]}"; do
  lang="${LANGUAGES[$i]}"
  gen="${GENERATORS[$i]}"
  echo ""
  echo "==> Generating $lang client ($gen)..."

  # Clean previous output
  rm -rf "$OUT/$lang"

  $GEN generate \
    -i "$SPEC_PATH" \
    -g "$gen" \
    -c "$CONFIG_PREFIX/$lang.json" \
    -o "$OUT_PREFIX/$lang" \
    --skip-validate-spec

  # Copy custom README if exists
  if [ -f "$READMES/$lang.md" ]; then
    cp "$READMES/$lang.md" "$OUT/$lang/README.md"
  fi

  echo "==> $lang client generated at sdks/$lang/"
done

echo ""
echo "All SDKs generated successfully."
