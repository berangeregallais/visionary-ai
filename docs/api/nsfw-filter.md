# 🚫 NSFW Content Detection

The `/nsfw-filter` endpoint analyzes an image to detect potentially inappropriate or sensitive content. It classifies images into Safe or Not Safe for Work (NSFW), helping developers build safer applications for all audiences.

---

## 📥 Endpoint: POST /nsfw-filter

**Base URL:** `https://api.visionary.ai/v1/nsfw-filter`

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

### Option 2 – Multipart

Use `image` as the field name.

---

## 🧪 Example (curl – multipart)

```bash
curl -X POST https://api.visionary.ai/v1/nsfw-filter \
  -H "Authorization: Bearer demo-api-key" \
  -F "image=@/path/to/image.jpg"
```

---

## ✅ Response

```json
{
  "nsfw_score": 0.87,
  "classification": "nsfw"
}
```

### 🧠 Fields

| Field            | Type   | Description                                                  |
| ---------------- | ------ | ------------------------------------------------------------ |
| `nsfw_score`     | float  | Value between 0 and 1 indicating probability of NSFW content |
| `classification` | string | Returns `"safe"` or `"nsfw"`                                 |

---

## ⚠️ Threshold Logic

- `nsfw_score` < 0.50 → `"safe"`

- `nsfw_score` ≥ 0.50 → `"nsfw"`

Threshold can be customized at integration level.

---

## 🚫 Error Responses

| Code | Message                             | Cause                         |
| ---- | ----------------------------------- | ----------------------------- |
| 400  | `"Missing image field"`             | No file or base64 string sent |
| 401  | `"Unauthorized"`                    | Invalid or missing API key    |
| 422  | `"Image unreadable or unsupported"` | File corrupted or unsupported |

---

## 📌 Notes

- This model uses an open-source NSFW classifier fine-tuned for general image filtering.

- This system **does not store or log any images**.

- Use responsibly and comply with local moderation laws and app store policies.

---

## 🔗 Next endpoint

➡️ Explore [`/metadata`](metadata.md) to extract EXIF and technical data from an image.
