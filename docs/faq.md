# ❓ Frequently Asked Questions (FAQ)

## 🧪 Can I test the API before subscribing?

Yes — you can use the `demo-api-key` to make up to **20 test calls per day**.  
Rate limits and response size may be restricted. Production use requires a valid API key.

---

## 📂 What image formats are supported?

- `.jpg`, `.jpeg`, `.png`, `.webp`, and `.bmp`
- GIFs are not supported (only static frames are analyzed if used)

---

## 🚀 How fast are the responses?

Response time depends on image size and endpoint.  
Average time:  

- `/analyze`: 500–800 ms  
- `/emotion`: 300–700 ms  
- `/nsfw-filter`: 250–600 ms  
- `/metadata`: 100–300 ms  

---

## 🔐 Do you store my images?

**No.** All processing is done in-memory.  
We do **not** store, cache, or log image contents. Your privacy is respected.

---

## 🧑‍💻 Do I need to preprocess images?

No — just send the image as-is. We'll handle resizing and format conversion automatically.  
However, better quality images usually lead to better results.

---

## 📉 Why am I getting low confidence scores?

- Low resolution or blurry image  
- Uncommon or ambiguous content  
- Multiple overlapping objects or faces  
- Poor lighting or occlusion  

Try using clearer, better-lit images with one main subject.

---

## 🌍 Can I use this API in production?

Yes — once you’ve created an account and obtained a private API key.  
You can then scale usage depending on your chosen plan.

---

## ⚖️ Can I use this documentation in my own project?

This documentation is part of a fictional portfolio project created by a technical writer.  
If you'd like to **reuse or adapt** parts of it for educational or demo purposes, please **ask for permission** first.  
Email: `gallaisberangere@gmail.com`

---

## 🧭 Still have questions?

You can reach us at: `support@visionary.ai`  
Or return to the [Introduction](./introduction.md).
