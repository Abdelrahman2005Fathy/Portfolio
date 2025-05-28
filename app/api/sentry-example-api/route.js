import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // قم بإثارة خطأ اختباري لمعالجة الأخطاء
    throw new Error("Sentry Example API Route Error");
  } catch (error) {
    // إعادة الاستجابة مع تفاصيل الخطأ
    return NextResponse.json({
      data: "Testing Sentry Error...",
      error: error.message,
    });
  }
}
