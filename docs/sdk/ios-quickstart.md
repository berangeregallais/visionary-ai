# 🍎 iOS Quickstart Guide

This guide helps you integrate the Visionary.ai API into your iOS app using Swift.

You’ll be able to send images from the device to the API and receive real-time analysis results.

---

## 📦 Prerequisites

- Xcode 13 or higher
- iOS 14+
- `NSCameraUsageDescription` and `NSPhotoLibraryUsageDescription` keys in `Info.plist`
- Internet access

---

## 🧱 Step 1 – Install Dependencies

You can use **Alamofire** or native `URLSession`.  
We’ll use `URLSession` in this example for zero dependency.

No external libraries required ✅

---

## 🖼️ Step 2 – Prepare the Image Data

Convert your selected image into `Data` format:

```swift
guard let image = UIImage(named: "sample.jpg"),
      let imageData = image.jpegData(compressionQuality: 0.8) else {
    return
}
```

You’ll need this to attach the image to the HTTP request.

---

## 🔐 Step 3 – Create the HTTP Request

```swift
let url = URL(string: "https://api.visionary.ai/v1/analyze")!
var request = URLRequest(url: url)
request.httpMethod = "POST"
request.setValue("Bearer YOUR_API_KEY", forHTTPHeaderField: "Authorization")

let boundary = UUID().uuidString
request.setValue("multipart/form-data; boundary=\(boundary)", forHTTPHeaderField: "Content-Type")
```

---

## 📤 Step 4 – Add the Image as Multipart/Form-Data

```swift
var body = Data()

body.append("--\(boundary)\r\n".data(using: .utf8)!)
body.append("Content-Disposition: form-data; name=\"image\"; filename=\"photo.jpg\"\r\n".data(using: .utf8)!)
body.append("Content-Type: image/jpeg\r\n\r\n".data(using: .utf8)!)
body.append(imageData)
body.append("\r\n".data(using: .utf8)!)
body.append("--\(boundary)--\r\n".data(using: .utf8)!)

request.httpBody = body
```

💡 Multipart form-data is the standard way to upload files via HTTP.
You must build the body manually with line breaks and boundaries, otherwise the API will reject the request.

---

## 🚀 Step 5 – Send the Request and Handle the Response

```swift
let task = URLSession.shared.dataTask(with: request) { data, response, error in
    guard let data = data, error == nil else {
        print("❌ Network error: \(error?.localizedDescription ?? "Unknown error")")
        return
    }

    if let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 {
        do {
            let result = try JSONDecoder().decode(AnalysisResponse.self, from: data)
            print("✅ Success: \(result)")
        } catch {
            print("❌ JSON decoding failed: \(error)")
        }
    } else {
        print("❌ API error: \(response.debugDescription)")
    }
}
task.resume()
```

💡 `AnalysisResponse` should be a Swift struct matching the JSON response. You can use [quicktype.io](https://app.quicktype.io) to generate it.

---

## 🧪 Testing

Use the `demo-api-key` to test up to 20 requests per day.
Replace it with your real key for production use.

---

## ⚠️ Notes

- Max file size: 5MB

- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

- Avoid large screenshots or low-res images

- Image must be attached under the field name `"image"`

---

Need help?
→ Check the [Integration Troubleshooting](./integration-troubleshooting.md) guide
→ Or read the [FAQ](./faq.md)
