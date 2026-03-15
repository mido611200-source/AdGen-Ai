export default function LandingPage() {
  const container = document.createElement('div');
  container.className = 'landing-page';

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-section" style="padding: var(--space-16) 0; position: relative; overflow: hidden;">
      <!-- Subtle Background Elements -->
      <div style="position: absolute; top: -10%; right: -5%; width: 400px; height: 400px; background: var(--primary-light); filter: blur(100px); opacity: 0.15; border-radius: 50%;"></div>
      <div style="position: absolute; bottom: 10%; left: -10%; width: 300px; height: 300px; background: var(--secondary); filter: blur(100px); opacity: 0.1; border-radius: 50%;"></div>

      <div class="container flex flex-col items-center text-center gap-8">
        <div style="max-width: 800px;">
          <h1 class="font-bold" style="font-size: 3.5rem; line-height: 1.2; margin-bottom: var(--space-4); color: var(--dark);">
            أنشئ إعلانات سوشيال ميديا احترافية بالذكاء الاصطناعي خلال ثواني
          </h1>
          <p class="text-gray" style="font-size: 1.2rem; margin-bottom: var(--space-8); max-width: 600px; margin-left: auto; margin-right: auto;">
            ضِعف المبيعات بنصف الجهد. صمم إعلانات جذابة لمنتجاتك على انستقرام وفيسبوك بضغطة زر وبدون أي خبرة مسبقة في التصميم.
          </p>
          <div class="flex justify-center gap-4">
            <button class="btn btn-primary" data-action="generate" style="font-size: 1.1rem; padding: var(--space-4) var(--space-8);">
              ابدأ إنشاء إعلانك <i class="ph-fill ph-sparkle"></i>
            </button>
            <button class="btn btn-secondary" data-action="analyze" style="font-size: 1.1rem; padding: var(--space-4) var(--space-8);">
              قم بتحليل هوية البراند
            </button>
          </div>
        </div>

        <!-- Mockup Image Wrapper -->
        <div class="card mt-8" style="width: 100%; max-width: 900px; padding: var(--space-2); background: var(--white); border: 1px solid var(--gray-200); transform: perspective(1000px) rotateX(2deg); box-shadow: var(--shadow-xl);">
          <div style="background: var(--gray-100); border-radius: var(--radius-sm); height: 400px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
             <!-- Decorative Mockup content -->
             <div class="flex w-full h-full">
               <div style="width: 30%; border-left: 1px solid var(--gray-200); padding: var(--space-4); background: var(--white);">
                  <div class="shimmer" style="height: 20px; width: 60%; border-radius: 4px; margin-bottom: var(--space-4);"></div>
                  <div class="shimmer" style="height: 10px; width: 100%; border-radius: 4px; margin-bottom: 8px;"></div>
                  <div class="shimmer" style="height: 10px; width: 80%; border-radius: 4px; margin-bottom: 8px;"></div>
                  <div class="shimmer" style="height: 10px; width: 90%; border-radius: 4px; margin-bottom: var(--space-6);"></div>
                  
                  <div class="shimmer" style="height: 80px; width: 100%; border-radius: 8px; margin-bottom: var(--space-4);"></div>
                  <div class="shimmer" style="height: 40px; width: 100%; border-radius: 8px; margin-top: auto; background: var(--primary-light);"></div>
               </div>
               <div style="width: 70%; padding: var(--space-4); display: flex; align-items: center; justify-content: center; background: var(--gray-50);">
                  <div class="card" style="width: 250px; height: 300px; padding: 0; position: relative;">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" style="width: 100%; height: 100%; object-fit: cover;" alt="Product Ad Mockup">
                    <div style="position: absolute; bottom: 0; width: 100%; padding: var(--space-4); background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white;">
                      <h3 style="font-size: 1.2rem; margin-bottom: 4px;">سماعات لاسلكية برو</h3>
                      <p style="font-size: 0.9rem; opacity: 0.9;">خصم 20% لفترة محدودة</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="trust-section" style="padding: var(--space-8) 0; border-bottom: 1px solid var(--gray-200);">
      <div class="container text-center">
        <p class="text-gray mb-4 font-bold">مُحسّن لمنصاتك المفضلة</p>
        <div class="flex justify-center items-center gap-8" style="flex-wrap: wrap; font-size: 2rem; color: var(--gray-400);">
          <div class="flex items-center gap-2"><i class="ph-fill ph-instagram-logo"></i> <span style="font-size:1rem; font-weight: bold;">Instagram</span></div>
          <div class="flex items-center gap-2"><i class="ph-fill ph-facebook-logo"></i> <span style="font-size:1rem; font-weight: bold;">Facebook</span></div>
          <div class="flex items-center gap-2"><i class="ph-fill ph-tiktok-logo"></i> <span style="font-size:1rem; font-weight: bold;">TikTok</span></div>
          <div class="flex items-center gap-2"><i class="ph-fill ph-snapchat-logo"></i> <span style="font-size:1rem; font-weight: bold;">Snapchat</span></div>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section style="padding: var(--space-16) 0;">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="font-bold mb-4" style="font-size: 2.5rem;">كيف يعمل الذكاء الاصطناعي؟</h2>
          <p class="text-gray">3 خطوات بسيطة تفصلك عن إعلانك الاحترافي</p>
        </div>
        
        <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-8);">
          <!-- Step 1 -->
          <div class="card text-center" style="padding: var(--space-8);">
            <div style="width: 64px; height: 64px; background: var(--primary-light); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto var(--space-4);">
              <i class="ph ph-upload-simple"></i>
            </div>
            <h3 class="font-bold mb-2">1. رفع صورة المنتج</h3>
            <p class="text-gray">قم برفع صورة منتجك أو شعارك مع كتابة وصف بسيط للخدمة.</p>
          </div>
          
          <!-- Step 2 -->
          <div class="card text-center" style="padding: var(--space-8);">
            <div style="width: 64px; height: 64px; background: var(--secondary); color: var(--dark); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto var(--space-4);">
              <i class="ph ph-squares-four"></i>
            </div>
            <h3 class="font-bold mb-2">2. اختر المنصة</h3>
            <p class="text-gray">حدد المنصة المستهدفة (انستقرام، فيسبوك...) والشكل المطلوب (بوست، ستوري).</p>
          </div>
          
          <!-- Step 3 -->
          <div class="card text-center" style="padding: var(--space-8);">
            <div style="width: 64px; height: 64px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto var(--space-4); box-shadow: var(--shadow-glow);">
              <i class="ph-fill ph-magic-wand"></i>
            </div>
            <h3 class="font-bold mb-2">3. إنشاء الإعلان</h3>
            <p class="text-gray">في ثوانٍ، سيقوم الذكاء الاصطناعي بتوليد تصاميم احترافية جاهزة للتحميل.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section style="padding: var(--space-16) 0; background: var(--dark); color: white;">
      <div class="container text-center">
        <h2 class="font-bold mb-6" style="font-size: 2.5rem;">جاهز لإطلاق حملتك الإعلانية القادمة؟</h2>
        <button class="btn btn-primary" data-action="generate" style="font-size: 1.2rem; padding: var(--space-4) var(--space-8);">
          ابدأ الآن مجاناً <i class="ph-fill ph-rocket-launch"></i>
        </button>
      </div>
    </section>
  `;

  return container;
}
