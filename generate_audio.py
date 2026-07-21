import asyncio
import html
import re
from pathlib import Path

import edge_tts


ROOT = Path("/opt/data/workspace/co8_interview")
SOURCE = ROOT / "CO8_企業研究與面試簡報_繁中.html"
AUDIO_DIR = ROOT / "audio"


def english_scripts() -> list[str]:
    source = SOURCE.read_text(encoding="utf-8")
    matches = re.findall(
        r"<details><summary>建議講法（English）</summary><p>(.*?)</p></details>",
        source,
        flags=re.DOTALL,
    )
    return [
        html.unescape(re.sub(r"<[^>]+>", "", text)).strip(" “”\n\t")
        for text in matches
    ]


async def main() -> None:
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    scripts = english_scripts()
    for index, text in enumerate(scripts, start=1):
        target = AUDIO_DIR / f"co8_english_{index:02d}.mp3"
        speech = edge_tts.Communicate(
            text=text,
            voice="en-US-AriaNeural",
            rate="-15%",
        )
        await speech.save(str(target))
        print(f"{index:02d}: {target.name}")
    print(f"generated={len(scripts)}")


if __name__ == "__main__":
    asyncio.run(main())
