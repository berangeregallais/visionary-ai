# 🧠 Image Classification

The `/analyze` endpoint allows you to extract visual information from a static image using AI-powered classification. It returns a list of detected objects, scenes, and tags, along with confidence scores.

---

## 📥 Endpoint : POST /analyze

**Base URL:** `https://api.visionary.ai/v1/analyze`

---

## 🔐 Headers

| Key             | Value                                       | Required |
|-----------------|---------------------------------------------|----------|
| Authorization   | `Bearer YOUR_API_KEY`                       | ✅       |
| Content-Type    | `application/json` or `multipart/form-data` | ✅       |

---

## 📸 Request Body

### Option 1 – JSON (Base64)

```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZ..."
}
```

---

### Option 2 – Multipart

Use `image` as the field name when sending the file.

#### 🧪 Example (curl – multipart)

```bash
curl -X POST https://api.visionary.ai/v1/analyze \
  -H "Authorization: Bearer demo-api-key" \
  -F "image=@/path/to/image.jpg"
```

---

## ✅ Response

```json
{
  "objects": [
    {
      "label": "cat",
      "confidence": 0.984
    },
    {
      "label": "sofa",
      "confidence": 0.877
    }
  ],
  "tags": ["indoor", "living room", "pet"]
}
```

### 🧠 Fields

| Field        | Type   | Description                                     |
| ------------ | ------ | ----------------------------------------------- |
| `label`      | string | Name of the detected object or scene            |
| `confidence` | float  | Value between 0 and 1 (higher = more confident) |
| `tags`       | array  | High-level context tags (non-exhaustive)        |

---

## 🚫 Error Responses

| Code | Message                           | Cause                        |
| ---- | --------------------------------- | ---------------------------- |
| 400  | `"Missing required field: image"` | No image provided in request |
| 401  | `"Unauthorized"`                  | Invalid or missing API key   |
| 422  | `"Unprocessable Entity"`          | Corrupt or unsupported image |

---

## 📌 Notes

- This endpoint is **synchronous**.

- For best results, use images with clear subjects and good lighting.

- The classification model is trained on a general dataset and may not identify niche objects.

---

## 🔗 Next endpoint

➡️ Try the [`/emotion`](./emotion.md) endpoint to analyze facial expressions.
