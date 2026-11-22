"""Assemble the eight reference-led Higgsfield shots into the portfolio film."""
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parent
durations = [6, 6, 4, 4, 6, 7, 8, 6]
transition = 0.25
args = ['ffmpeg', '-y', '-hide_banner', '-loglevel', 'warning', '-filter_complex_threads', '1']
for index in range(8):
    args += ['-i', str(root / f'shot-{index:02}.mp4')]
filters = []
for index, duration in enumerate(durations):
    filters.append(f'[{index}:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=24,trim=duration={duration},settb=AVTB,setpts=PTS-STARTPTS,format=yuv420p[v{index}]')
elapsed = durations[0]
previous = 'v0'
for index in range(1, 8):
    offset = elapsed - transition
    output = f'x{index}'
    filters.append(f'[{previous}][v{index}]xfade=transition=fade:duration={transition}:offset={offset:.4f}[{output}]')
    elapsed += durations[index] - transition
    previous = output
filters.append(f'[{previous}]fade=t=in:st=0:d=0.25,tpad=stop_mode=clone:stop_duration=1,format=yuv420p[film]')
(root / 'edit-filter.txt').write_text(';\n'.join(filters))
args += ['-filter_complex', ';'.join(filters), '-map', '[film]', '-an', '-c:v', 'libx264', '-preset', 'fast', '-crf', '18', '-threads', '4', '-movflags', '+faststart', str(root / 'the-journey-of-an-engineer.mp4')]
subprocess.run(args, check=True)
print(f'Exported {elapsed + 1:.2f}s film: {root / "the-journey-of-an-engineer.mp4"}')
