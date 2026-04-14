#!/bin/bash
set -e

echo "Building landing page..."
npm run build

echo "Deploying to Firebase Hosting..."
firebase deploy --only hosting --project=juliabellenger

echo "Done!"
