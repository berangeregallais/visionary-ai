# 🧯 Integration Troubleshooting

Having trouble connecting or using the Visionary.ai API?  
This guide covers the most common issues and how to resolve them fast.

---

## ❌ 401 Unauthorized

**Cause:** Invalid or missing API key.

**Solutions:**

- Make sure your `Authorization` header is formatted like this:

```makefile
Authorization: Bearer YOUR_API_KEY
```

- Double-check that your key has no extra spaces or invisible characters.
- Use your **live key** for production — the demo key has daily limits.

---

## 🖼️ 400 Bad Request – Missing Image

**Cause:** No image was attached, or the field name was incorrect.

**Solutions:**

- Make sure the image field is named exactly `image`.
- Use `multipart/form-data` encoding in your POST request.
- Ensure you're not sending an empty file or unsupported format.

---

## 📏 413 Payload Too Large

**Cause:** Uploaded image exceeds the 5MB limit.

**Solutions:**

- Resize or compress the image before uploading.
- Use JPEG over PNG when possible.
- Limit camera resolution if using real-time uploads.

---

## 🧾 415 Unsupported Media Type

**Cause:** Image is in a format the API does not support.

**Supported formats:**

- `.jpg`, `.jpeg`
- `.png`
- `.webp`

**Not supported:**

- `.heic`, `.bmp`, `.tiff`, `.gif`

---

## 🕰️ Timeout or No Response

**Cause:** Network issue or slow upload.

**Solutions:**

- Try using a faster internet connection.
- Use a tool like [Postman](https://www.postman.com/) to test your request manually.
- Check [status.visionary.ai](https://status.visionary.ai) (if available) for service outages.

---

## 🔍 Invalid JSON Response

**Cause:** You may be trying to parse the API response incorrectly.

**Solutions:**

- Use a JSON linter to inspect the response.
- Make sure you're decoding into the right object/struct.
- Check for nested objects that may require a custom parser.

---

## 📮 Still stuck?

No worries — we're here for you.

Contact our developer support team:
→ [support@visionary.ai](mailto:support@visionary.ai)

Or check:

- [API Reference](./introduction.md)
- [Common Use Cases](./common-use-cases.md)
- [FAQ](./faq.md)
