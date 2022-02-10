## next-queue-bot

# สำหรับ linux พิมพ์คำสั่งในไฟล์โปรเจคว่า

$ cp .env.example .env 

แล้วจะได้ไฟล์ .env มาและให้แก้ไข ฐานข้อมูลในไฟล์ .env และพิมพ์คำสั่ง

$ npm install

รัน project ด้วยคำสั่ง

$ npm run dev

# สำหรับ window 
1. เข้าโฟเดอร์ที่ต้องการวางไฟล์ แล้วใช้คำสั่ง
git clone https://github.com/610112230006/next-queue-bot.git
2. เข้าไปยังโฟเด้อ project ที่ clone ตามข้อ 1 แล้ว RUN คำสั่ง
cd next-queue-bot 
3.แก้ไขการเชื่อมต่อฐานข้อมูล HOSXP ที่ไฟล์ .env.example แล้วบันทึกชื่อไฟล์เป็น .env
4. RUN คำสั่ง
npm i
5. RUN คำสั่ง
npm run dev
6. ตรวจสอบการทำงานที่ 
localhost:8383 
(แล้วแต่ที่กำหนดใน .env)
