# 🚀 Getting Started

Welcome! This page will help you get up and running with **Visionary.ai** in just a few minutes. Whether you're building on iOS, Android, or working with the API directly, this guide gives you the foundation you need.

---

## 🔐 Authentication

To use Visionary.ai, you must include an API key in every request.

**Base URL:** `https://api.visionary.ai/v1/`

```makefile
Authorization: Bearer YOUR_API_KEY
```

> 📌 You’ll receive your API key after registration.  
> For this fictional project, you can use the placeholder:  
> `Authorization: Bearer demo-api-key`

---

## 📸 Supported Image Formats

Visionary.ai currently accepts:

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WEBP (.webp)

Maximum file size: **5MB**  
Minimum image resolution: **200x200 px**

---

## 🧾 Request Structure

You can send image data in **base64** format or as **multipart/form-data** (recommended for mobile apps).

### Example: JSON (Base64)

```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZ..."
}
```

---

### Example: Multipart (via curl)

```bash
curl -X POST https://api.visionary.ai/v1/analyze \
  -H "Authorization: Bearer demo-api-key" \
  -F "image=@/path/to/your/image.jpg"
```

---

## 🛑 Common HTTP Errors

| Code | Message                   | Cause                      |
| ---- | ------------------------- | -------------------------- |
| 401  | `"Unauthorized"`          | Invalid or missing API key |
| 413  | `"Payload Too Large"`     | Image exceeds 5MB          |
| 422  | `"Unprocessable Entity"`  | Invalid image format       |
| 500  | `"Internal Server Error"` | Something went wrong       |

---

## 🧪 Test Your First Call

You can test the `/analyze` endpoint using your preferred HTTP client or [Postman](https://www.postman.com).

---

## 📦 SDK Quickstarts

If you're using the SDKs, jump ahead:

- 📲 [Android Quickstart](./sdk/android-quickstart.md)

- 🍎 [iOS Quickstart](./sdk/ios-quickstart.md)

---

## 🔗 What's next?

➡️ Learn how to detect objects and scenes with the `/analyze` endpoint.
