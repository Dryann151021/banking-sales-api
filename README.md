# Banking Sales API

RESTful API untuk portal banking sales web. Backend ini dibangun menggunakan Node.js dan Express.js, dengan PostgreSQL sebagai database utama, Redis untuk caching, dan RabbitMQ untuk message broker.

## Fitur Utama

- **Autentikasi & Otorisasi**: Login, Logout, dan Refresh Token menggunakan JWT.
- **Manajemen User**: Pengelolaan data pengguna aplikasi.
- **Manajemen Leads**: CRUD data prospek nasabah (Leads).
- **Dashboard**: Menyediakan ringkasan statistik dan performa sales.
- **Notes**: Menambahkan dan mengelola catatan untuk setiap lead.
- **Histories**: Melacak riwayat interaksi dan perubahan status pada leads.
- **Integrasi Machine Learning**: Import data prediksi dari layanan ML eksternal.
- **Notifikasi Email**: Layanan pengiriman email menggunakan SMTP (Nodemailer).
- **Caching**: Implementasi Redis untuk meningkatkan performa.
- **Asynchronous Processing**: Menggunakan RabbitMQ untuk pemrosesan latar belakang.

## Teknologi yang Digunakan

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Caching**: Redis
- **Message Broker**: RabbitMQ
- **Authentication**: JSON Web Token (JWT)
- **Validation**: Joi
- **Migration**: node-pg-migrate
- **Email**: Nodemailer

## Prasyarat

Sebelum menjalankan aplikasi, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (v14 atau lebih baru)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [RabbitMQ](https://www.rabbitmq.com/)

## Instalasi

1.  **Clone Repository**

    ```bash
    git https://github.com/a25-cs097-capstone-project-asah/banking-sales-api.git
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variables**

    Buat file `.env` di root direktori proyek dan isi dengan konfigurasi berikut (sesuaikan dengan environment Anda):

    ```env
    # App Config
    PORT=5000
    HOST=localhost
    USER_PASSWORD=password_default_user_alas_sales

    # PostgreSQL Database
    PGUSER=postgres
    PGHOST=localhost
    PGDATABASE=banking_sales_db
    PGPASSWORD=password_postgres_anda
    PGPORT=5432

    # JWT Token Keys
    ACCESS_TOKEN_KEY=rahasia_access_token_anda
    REFRESH_TOKEN_KEY=rahasia_refresh_token_anda

    # RabbitMQ
    RABBITMQ_URL=amqp://localhost

    # Redis
    REDIS_HOST=localhost
    REDIS_PORT=6379

    # SMTP Mail Server (Nodemailer)
    SMTP_HOST=smtp.mailtrap.io
    SMTP_PORT=2525
    SMTP_USER=user_smtp_anda
    SMTP_PASS=password_smtp_anda

    # Machine Learning API
    ML_API_URL=http://url-ke-ml-service-anda
    ```

4.  **Setup Database**

    Jalankan migrasi untuk membuat tabel-tabel yang diperlukan:

    ```bash
    npm run migrate up
    ```

5.  **Seed Data**

    Untuk mengisi database dengan data user (sales):

    ```bash
    npm run seed
    ```

## Menjalankan Aplikasi

### Mode Development

Jalankan server menggunakan `nodemon` (auto-restart saat ada perubahan kode):

```bash
npm start
```

Server akan berjalan di `http://localhost:5000` (sesuai dengan `.env`).

### Import Data ML

Untuk menjalankan skrip import data dari API Machine Learning:

```bash
npm run import
```

## Struktur Folder

- `src/api`: Berisi handler (controller) dan routes untuk setiap fitur.
- `src/services`: Berisi business logic.
  - `postgre`: Service yang berinteraksi dengan database PostgreSQL.
  - `redis`: Service untuk caching.
  - `rabbitMq`: Service untuk message broker.
  - `external`: Service untuk API eksternal.
- `src/utils`: Fungsi-fungsi utility dan helper.
- `src/middlewares`: Custom middleware (Auth, Error Handling, dll).
- `src/exceptions`: Definisi custom error class.
- `src/validator`: Schema validasi data (Joi).
- `migrations`: File migrasi database.

## Author

**Adriyan**
