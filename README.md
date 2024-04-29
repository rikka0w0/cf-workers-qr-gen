# QR Code generator for Cloudflare Workers

### Usage
All requests are GET.
If the request contains a query param named `qr_text`, the worker will return a QR Code PNG image.
The query param should be URL-encoded.
Otherwise, the worker will return an HTML page for the QR Code interactive creation.

```
# Initialize
git clone ...
cd ...
npm install

# Run on local
npm run start

# Deploy to Cloudflare Workers
npm run deploy
```
