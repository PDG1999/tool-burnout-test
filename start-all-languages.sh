#!/bin/bash

# Start all language versions on different ports
echo "🚀 Starting all language versions..."

# German version (port 3000)
echo "🇩🇪 Starting German version on port 3000..."
VITE_LANGUAGE=de VITE_API_URL=https://api.samebi.net VITE_GA_TRACKING_ID=G-DE-XXXXXXXXX npm run dev &
DE_PID=$!

# English version (port 3001)
echo "🇬🇧 Starting English version on port 3001..."
VITE_LANGUAGE=en VITE_API_URL=https://en-api.samebi.net VITE_GA_TRACKING_ID=G-EN-XXXXXXXXX VITE_PORT=3001 npm run dev &
EN_PID=$!

# Spanish version (port 3002)
echo "🇪🇸 Starting Spanish version on port 3002..."
VITE_LANGUAGE=es VITE_API_URL=https://es-api.samebi.net VITE_GA_TRACKING_ID=G-ES-XXXXXXXXX VITE_PORT=3002 npm run dev &
ES_PID=$!

echo ""
echo "✅ All versions started!"
echo "🇩🇪 German:  http://localhost:3000"
echo "🇬🇧 English: http://localhost:3001"
echo "🇪🇸 Spanish: http://localhost:3002"
echo ""
echo "Press Ctrl+C to stop all versions"

# Wait for user to stop
wait

# Kill all processes when script is stopped
echo "🛑 Stopping all versions..."
kill $DE_PID $EN_PID $ES_PID 2>/dev/null
