#!/bin/bash
cd "$(dirname "$0")"
python scripts/scraping.py
npm run build
