# 🤖 Android Quickstart Guide

This guide helps you integrate the Visionary.ai API into your Android app using Java or Kotlin.

You’ll be able to send images from your device to our API and receive analysis results in real time.

---

## 📦 Prerequisites

- Android Studio (Arctic Fox or newer)
- Target SDK ≥ 26
- Internet permission in your `AndroidManifest.xml`

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

---

## 🧱 Step 1 – Add Dependencies

We’ll use `OkHttp` and `Retrofit` to make HTTP requests.

In your `build.gradle` (app) file:

```gradle
dependencies {
    implementation 'com.squareup.okhttp3:okhttp:4.12.0'
    implementation 'com.squareup.retrofit2:retrofit:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
}
```

---

## 🖼️ Step 2 – Prepare the Image File

Use this method to get the file from your `ImageView` or gallery selection:

```kotlin
val file = File(imageUri.path!!)
val requestFile = file.asRequestBody("image/*".toMediaTypeOrNull())
val imagePart = MultipartBody.Part.createFormData("image", file.name, requestFile)
```

---

## 🔐 Step 3 – Setup the API Client

### 1. Create the Retrofit Interface

Define the API endpoint using a Kotlin interface:

```kotlin
interface VisionaryApi {
    @Multipart
    @POST("https://api.visionary.ai/v1/analyze")
    fun analyzeImage(
        @Header("Authorization") apiKey: String,
        @Part image: MultipartBody.Part
    ): Call<AnalysisResponse>
}
```

🔍 Explanation

- `@Multipart` indicates a multipart/form-data request (used for file uploads).

- `@POST("analyze")` targets the `/analyze` endpoint.

- `@Header` lets you add the `Authorization` header for your API key.

- `@Part` is the image you're sending (prepared earlier).

💡 `AnalysisResponse` should be a data class representing the expected JSON response.
You can mock it if you're just testing for now.

---

### 2. Create the Retrofit Interface

```kotlin
val retrofit = Retrofit.Builder()
    .baseUrl("https://api.visionary.ai/v1/")
    .addConverterFactory(GsonConverterFactory.create())
    .build()
```

🔍 Explanation:

- `baseUrl` defines the root for all API requests.

- `GsonConverterFactory` automatically converts JSON responses into Kotlin objects.

---

### 3. Create the API Client

```kotlin
val api = retrofit.create(VisionaryApi::class.java)
```

This creates a usable instance of the `VisionaryApi` interface — your gateway to the API.

---

### 4. Make the Request with the Image

```kotlin
val call = api.analyzeImage("Bearer YOUR_API_KEY", imagePart)
```

⚠️ Don't forget to include the `"Bearer "` prefix before your API key.

---

### 5. Handle the Response

```kotlin
call.enqueue(object : Callback<AnalysisResponse> {
    override fun onResponse(call: Call<AnalysisResponse>, response: Response<AnalysisResponse>) {
        if (response.isSuccessful) {
            val result = response.body()
            // ✅ Handle analysis results here
        } else {
            // ❌ Handle HTTP errors
        }
    }

    override fun onFailure(call: Call<AnalysisResponse>, t: Throwable) {
        // ⚠️ Handle network failures or timeouts
    }
})
```

---

## 🧪 Testing

Use the `demo-api-key` to test up to 20 calls/day.
Replace with your real API key when you're ready for production.

---

## 🚧 Notes

- Max image size: 5MB

- Accepted formats: JPEG, PNG, WEBP

- Avoid uploading screenshots or corrupted files

- Use `.toRequestBody()` only on valid image types

---

Need help?
→ Check our [Integration Troubleshooting](./integration-troubleshooting.md) guide
→ Or visit the [FAQ](./faq.md)
