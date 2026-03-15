export default function DashboardPage() {
  const container = document.createElement('div');
  container.className = 'dashboard-page flex h-full';
  container.style.minHeight = 'calc(100vh - 80px)';

  container.innerHTML = `
    <!-- Sidebar -->
    <aside style="width: 250px; background: white; border-left: 1px solid var(--gray-200); padding: var(--space-6); display: flex; flex-direction: column;">
       <nav class="flex flex-col gap-2">
         <a href="#" class="btn btn-text flex items-center gap-2 text-primary" style="justify-content: flex-start; background: var(--gray-100); border-radius: var(--radius-sm); font-weight: bold;">
            <i class="ph-fill ph-squares-four"></i> نظرة عامة
         </a>
         <a href="#" class="btn btn-text flex items-center gap-2" style="justify-content: flex-start;">
            <i class="ph ph-folder-open"></i> مشاريعي
         </a>
         <a href="#" class="btn btn-text flex items-center gap-2" style="justify-content: flex-start;">
            <i class="ph ph-gear"></i> الإعدادات
         </a>
       </nav>
       
       <div style="margin-top: auto;">
          <a href="#" class="btn btn-text flex items-center gap-2 text-gray" style="justify-content: flex-start;">
            <i class="ph ph-sign-out"></i> تسجيل الخروج
         </a>
       </div>
    </aside>

    <!-- Main Dashboard Content -->
    <main style="flex: 1; padding: var(--space-8); overflow-y: auto;">
      
      <!-- Welcome Header -->
      <header class="flex justify-between items-center mb-8">
         <div>
            <h1 class="font-bold mb-1" style="font-size: 2rem;">مرحباً بك يا أحمد 👋</h1>
            <p class="text-gray">جاهز لإطلاق حملتك الإعلانية القادمة؟</p>
         </div>
         <div class="flex gap-4">
           <button class="btn btn-secondary" data-action="analyze">
              قم بتحليل هوية البراند <i class="ph-fill ph-magnifying-glass"></i>
           </button>
           <button class="btn btn-primary" data-action="generate">
              توليد إعلان جديد ✨
           </button>
         </div>
      </header>

      <!-- Quick Stats -->
      <div class="grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); mb-8;">
         <div class="card flex items-center gap-4" style="padding: var(--space-4);">
            <div style="width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--primary-light); color: white; display: flex; items-center; justify-content: center; font-size: 1.5rem;"><i class="ph-fill ph-image"></i></div>
            <div>
               <p class="text-gray" style="font-size: 0.9rem;">الإعلانات المُولدة</p>
               <p class="font-bold" style="font-size: 1.5rem;">24</p>
            </div>
         </div>
         <div class="card flex items-center gap-4" style="padding: var(--space-4);">
            <div style="width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--secondary); color: var(--dark); display: flex; items-center; justify-content: center; font-size: 1.5rem;"><i class="ph-fill ph-download-simple"></i></div>
            <div>
               <p class="text-gray" style="font-size: 0.9rem;">التحميلات</p>
               <p class="font-bold" style="font-size: 1.5rem;">18</p>
            </div>
         </div>
         <div class="card flex items-center gap-4" style="padding: var(--space-4);">
            <div style="width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--gray-200); color: var(--gray-800); display: flex; items-center; justify-content: center; font-size: 1.5rem;"><i class="ph-fill ph-clock-counter-clockwise"></i></div>
            <div>
               <p class="text-gray" style="font-size: 0.9rem;">دقيقة تم توفيرها</p>
               <p class="font-bold" style="font-size: 1.5rem;">+120m</p>
            </div>
         </div>
      </div>

      <!-- Recent Ads -->
      <section class="mt-8">
         <div class="flex justify-between items-center mb-4">
            <h2 class="font-bold" style="font-size: 1.2rem;">أحدث الإعلانات</h2>
            <a href="#" class="text-primary" style="font-size: 0.9rem; font-weight: bold;">عرض الكل</a>
         </div>
         
         <div class="grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4);">
            
            <div class="card result-card" style="height: 250px; background: url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80') center/cover; position: relative;">
              <div class="overlay flex flex-col items-center justify-center gap-4" style="position: absolute; inset: 0; background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; padding: var(--space-4);">
                 <button class="btn btn-primary w-full" style="padding: 8px;"><i class="ph-bold ph-download-simple"></i></button>
                 <button class="btn btn-secondary w-full" style="padding: 8px;"><i class="ph-bold ph-pencil-simple"></i></button>
              </div>
            </div>

            <div class="card result-card" style="height: 250px; background: url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80') center/cover; position: relative;">
              <div class="overlay flex flex-col items-center justify-center gap-4" style="position: absolute; inset: 0; background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; padding: var(--space-4);">
                 <button class="btn btn-primary w-full" style="padding: 8px;"><i class="ph-bold ph-download-simple"></i></button>
                 <button class="btn btn-secondary w-full" style="padding: 8px;"><i class="ph-bold ph-pencil-simple"></i></button>
              </div>
            </div>

            <div class="card result-card" style="height: 250px; background: url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80') center/cover; position: relative;">
               <div class="overlay flex flex-col items-center justify-center gap-4" style="position: absolute; inset: 0; background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; padding: var(--space-4);">
                 <button class="btn btn-primary w-full" style="padding: 8px;"><i class="ph-bold ph-download-simple"></i></button>
                 <button class="btn btn-secondary w-full" style="padding: 8px;"><i class="ph-bold ph-pencil-simple"></i></button>
              </div>
            </div>

             <div class="card result-card flex items-center justify-center" style="height: 250px; background: var(--gray-100); border: 2px dashed var(--gray-200); position: relative; cursor: pointer;">
               <div class="text-center text-gray">
                 <i class="ph ph-plus-circle" style="font-size: 2rem; margin-bottom: 8px;"></i>
                 <p class="font-bold">تصميم جديد</p>
               </div>
            </div>
            
         </div>
      </section>

    </main>
  `;

  const style = document.createElement('style');
  style.innerHTML = `
    .result-card:hover .overlay { opacity: 1 !important; }
    .result-card:hover { border-color: var(--primary) !important; color: var(--primary); }
  `;
  container.appendChild(style);

  return container;
}
