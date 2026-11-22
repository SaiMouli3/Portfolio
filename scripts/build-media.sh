#!/usr/bin/env bash
# Builds web derivatives from the masters in output/. Masters are never modified.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=output/character-design
FILM=output/engineer-film
OUT=public/media
mkdir -p "$OUT/scenes" "$OUT/portraits" "$OUT/film" public/resume

# Scene + portrait masters → high-quality WebP (next/image produces AVIF/WebP sizes at request time)
for f in childhood-walk-to-school childhood-gaming-bedroom college-campus-arrival college-programming-laboratory \
         engineering-graduation bengaluru-software-engineer-office late-night-ai-research; do
  cwebp -quiet -q 86 -m 6 "$SRC/$f.png" -o "$OUT/scenes/$f.webp"
done
for f in childhood-protagonist protagonist-college-age-20 protagonist-age-23; do
  cwebp -quiet -q 86 -m 6 -resize 768 0 "$SRC/$f.png" -o "$OUT/portraits/$f.webp"
done

# Film: 720p H.264 web derivative, silent, fast-start (skipped if already built). Original kept as 1080p fallback.
[ -f "$OUT/film/journey-720.mp4" ] || \
  ffmpeg -v error -y -i "$FILM/the-journey-of-an-engineer.mp4" -vf "scale=1280:720:flags=lanczos,format=yuv420p" \
  -c:v libx264 -preset slow -crf 23 -profile:v high -g 48 -movflags +faststart -an "$OUT/film/journey-720.mp4"
cp "$FILM/the-journey-of-an-engineer.mp4" "$OUT/film/journey-1080.mp4"
TMP=$(mktemp -d)
ffmpeg -v error -y -ss 1.5 -i "$FILM/the-journey-of-an-engineer.mp4" -frames:v 1 -vf scale=1280:720 "$TMP/poster.png"
cwebp -quiet -q 80 "$TMP/poster.png" -o "$OUT/film/poster.webp"
# Chapter 8 still (frame 965 ≈ 40.2 s): the builder leaning in at the night workstation
ffmpeg -v error -y -i "$FILM/the-journey-of-an-engineer.mp4" -vf "select='eq(n\,965)',scale=1344:-1" -frames:v 1 "$TMP/builder.png"
cwebp -quiet -q 84 "$TMP/builder.png" -o "$OUT/scenes/builder-at-night.webp"

# Open Graph card 1200x630 from the office scene
ffmpeg -v error -y -i "$SRC/bengaluru-software-engineer-office.png" -vf "scale=1200:-1,crop=1200:630:0:(ih-630)/2" -q:v 3 public/og.jpg

cp Sai_Mouli_Resume_B_Applied_Ai.pdf public/resume/Sai-Mouli-Resume.pdf
echo "media built"
