# 🗂️ Image Metadata Extraction

The `/metadata` endpoint extracts technical and contextual information embedded in an image file. This includes EXIF data such as GPS coordinates, camera model, date taken, and more.

This is useful for photo management apps, forensic analysis, or any service requiring image provenance.

---

## 📥 Endpoint: POST /metadata

**Base URL:** `https://api.visionary.ai/v1/metadata`

---

## 🔐 Headers

| Key             | Value                                       | Required |
|------------------|--------------------------------------------|----------|
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
curl -X POST https://api.visionary.ai/v1/metadata \
  -H "Authorization: Bearer demo-api-key" \
  -F "image=@/path/to/image.jpg"
```

---

## ✅ Response

```json
{
  "camera": {
    "make": "Canon",
    "model": "EOS 80D"
  },
  "datetime": "2024-06-12T14:27:00Z",
  "gps": {
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "resolution": {
    "width": 6000,
    "height": 4000
  },
  "format": "jpeg",
  "filesize_kb": 3450
}
```

### 🧠 Fields

| Field               | Type    | Description                                   |
| ------------------- | ------- | --------------------------------------------- |
| `camera`            | object  | Object containing camera manufacturer & model |
| `camera.make`       | string  | Camera manufacturer (e.g. Canon, Sony)        |
| `camera.model`      | string  | Camera model name                             |
| `datetime`          | string  | Date and time the image was taken (ISO 8601)  |
| `gps`               | object  | Object containing GPS coordinates             |
| `gps.latitude`      | float   | Latitude in decimal degrees                   |
| `gps.longitude`     | float   | Longitude in decimal degrees                  |
| `resolution`        | object  | Object with image width and height            |
| `resolution.width`  | integer | Image width in pixels                         |
| `resolution.height` | integer | Image height in pixels                        |
| `format`            | string  | File format (jpeg, png, webp)                 |
| `filesize_kb`       | integer | Size of the image in kilobytes                |

---

## 🚫 Error Responses

| Code | Message                  | Cause                           |
| ---- | ------------------------ | ------------------------------- |
| 400  | `"No image provided"`    | Missing file or base64 string   |
| 401  | `"Unauthorized"`         | Invalid API key                 |
| 422  | `"Image lacks metadata"` | EXIF data not found or stripped |

---

## 📌 Notes

- Not all images contain metadata (especially screenshots or edited photos).

- GPS data may be removed depending on the device or privacy settings.

- You can use this endpoint before or after any other processing step.

---

## 🧭 Done with the endpoints?

➡️ Head back to the [Introduction](../introduction.md)
or visit the [FAQ](../faq.md) for common questions.
