# 😊 Emotion Recognition

The `/emotion` endpoint analyzes faces in an image and detects the dominant emotions expressed by each individual. It is ideal for building apps that react to user sentiment, conduct surveys, or monitor engagement.

---

## 📥 Endpoint : POST /emotion

**Base URL:** `https://api.visionary.ai/v1/emotion`

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
  "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..."
}
```

### Option 2 – Multipart (recommended)

Use `image` as the field name when uploading.

---

## 🧪 Example (curl – multipart)

```bash
curl -X POST https://api.visionary.ai/v1/emotion \
  -H "Authorization: Bearer demo-api-key" \
  -F "image=@/path/to/image.jpg"
```

---

## ✅ Response

```json
{
  "faces": [
    {
      "bounding_box": {
        "x": 120,
        "y": 80,
        "width": 140,
        "height": 140
      },
      "emotions": [
        {
          "label": "happy",
          "confidence": 0.92
        },
        {
          "label": "neutral",
          "confidence": 0.07
        }
      ]
    }
  ]
}
```

### 🧠 Fields

| Field          | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `bounding_box` | object   | Location of detected face (x, y, width, height) |
| `emotions`     | array    | List of probable emotions and their confidence  |
| `label`        | string   | Detected emotion (e.g. happy, sad, angry)       |
| `confidence`   | float    | Value between 0 and 1                           |

---

### 😊 Possible Emotions

- happy

- sad

- angry

- surprised

- fearful

- disgusted

- neutral

---

## 🚫 Error Responses

| Code | Message                | Cause                         |
| ---- | ---------------------- | ----------------------------- |
| 400  | `"No face detected"`     | No recognizable face in image |
| 401  | `"Unauthorized"`         | Missing or invalid API key    |
| 422  | `"Unprocessable Entity"` | Bad image format or corrupted |

---

## 📌 Notes

- Works best with frontal or slightly angled faces.

- Can detect **multiple faces** in the same image.

- Results are approximate and may vary based on image quality.

---

## 🔗 Next endpoint

➡️ Try the [`/nsfw-filter`](./nsfw-filter.md) endpoint to moderate inappropriate content.
