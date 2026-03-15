export default function TemplatesPage() {
  const container = document.createElement('div');
  container.className = 'templates-page container mt-8';

  container.innerHTML = `
    <div class="flex justify-between items-center mb-8" style="background: white; padding: var(--space-6); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
       <div>
         <h2 class="font-bold mb-2" style="font-size: 2rem;">مكتبة النماذج</h2>
         <p class="text-gray">آلاف النماذج المصممة مسبقاً جاهزة لتخصيصها بضغطة زر</p>
       </div>
       <button class="btn btn-primary" data-link="generator">توليد إعلان جديد <i class="ph-fill ph-plus-circle"></i></button>
    </div>

    <!-- Filters Menu -->
    <div class="filters-bar flex gap-4 mb-8" style="flex-wrap: wrap;">
       <div style="flex: 1; min-width: 200px;">
          <label class="form-label text-gray" style="font-size: 0.8rem;">المنصة</label>
          <select class="form-control" style="background: white; border: none; box-shadow: var(--shadow-sm);">
             <option>الكل</option>
             <option>انستقرام</option>
             <option>سناب شات</option>
             <option>تيك توك</option>
          </select>
       </div>
       <div style="flex: 1; min-width: 200px;">
          <label class="form-label text-gray" style="font-size: 0.8rem;">نوع النشاط</label>
          <select class="form-control" style="background: white; border: none; box-shadow: var(--shadow-sm);">
             <option>متجر إلكتروني</option>
             <option>مطعم / مقهى</option>
             <option>أزياء</option>
             <option>عقارات</option>
             <option>تقنية</option>
          </select>
       </div>
       <div style="flex: 1; min-width: 200px;">
          <label class="form-label text-gray" style="font-size: 0.8rem;">النمط الفني</label>
          <select class="form-control" style="background: white; border: none; box-shadow: var(--shadow-sm);">
             <option>الكل</option>
             <option>فاخر</option>
             <option>عصري</option>
             <option>حيوي</option>
          </select>
       </div>
    </div>

    <!-- Grid Gallery -->
    <div class="masonry-grid" style="column-count: 3; column-gap: var(--space-6); padding-bottom: var(--space-12);">
       
       <!-- Template Card 1 -->
       <div class="template-card card mb-6" style="break-inside: avoid; position: relative;">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" style="width: 100%; display: block; border-bottom: 1px solid var(--gray-200);">
          <div style="padding: var(--space-4);">
             <div class="flex justify-between items-center mb-2">
               <h3 class="font-bold" style="font-size: 1.1rem;">إعلان منتج عصري</h3>
               <span style="background: var(--gray-100); color: var(--gray-600); padding: 4px 8px; border-radius: 4px; font-size: 0.7rem;">انستقرام مربع</span>
             </div>
             <p class="text-gray" style="font-size: 0.9rem;">مناسب لمنتجات التجزئة والأحذية.</p>
          </div>
          <div class="hover-action" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s;">
             <button class="btn btn-primary">استخدم هذا النموذج</button>
          </div>
       </div>

       <!-- Template Card 2 -->
       <div class="template-card card mb-6" style="break-inside: avoid; position: relative;">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" style="width: 100%; display: block; border-bottom: 1px solid var(--gray-200); aspect-ratio: 9/16; object-fit: cover;">
          <div style="padding: var(--space-4);">
             <div class="flex justify-between items-center mb-2">
               <h3 class="font-bold" style="font-size: 1.1rem;">ساعة ذكية פاخرة</h3>
               <span style="background: var(--gray-100); color: var(--gray-600); padding: 4px 8px; border-radius: 4px; font-size: 0.7rem;">سناب شات</span>
             </div>
             <p class="text-gray" style="font-size: 0.9rem;">تصميم عمودي مناسب للإعلانات المستهدفة.</p>
          </div>
          <div class="hover-action" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s;">
             <button class="btn btn-primary">استخدم هذا النموذج</button>
          </div>
       </div>

       <!-- Template Card 3 -->
       <div class="template-card card mb-6" style="break-inside: avoid; position: relative;">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" style="width: 100%; display: block; border-bottom: 1px solid var(--gray-200);">
          <div style="padding: var(--space-4);">
             <div class="flex justify-between items-center mb-2">
               <h3 class="font-bold" style="font-size: 1.1rem;">عرض سماعات</h3>
               <span style="background: var(--gray-100); color: var(--gray-600); padding: 4px 8px; border-radius: 4px; font-size: 0.7rem;">فيسبوك مربع</span>
             </div>
             <p class="text-gray" style="font-size: 0.9rem;">مثالي لإبراز الخصومات الكبيرة.</p>
          </div>
          <div class="hover-action" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s;">
             <button class="btn btn-primary">استخدم هذا النموذج</button>
          </div>
       </div>

       <!-- Template Card 4 -->
       <div class="template-card card mb-6" style="break-inside: avoid; position: relative;">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80" style="width: 100%; display: block; border-bottom: 1px solid var(--gray-200); aspect-ratio: 9/16; object-fit: cover;">
          <div style="padding: var(--space-4);">
             <div class="flex justify-between items-center mb-2">
               <h3 class="font-bold" style="font-size: 1.1rem;">إعلان مطعم حيوي</h3>
               <span style="background: var(--gray-100); color: var(--gray-600); padding: 4px 8px; border-radius: 4px; font-size: 0.7rem;">تيك توك</span>
             </div>
             <p class="text-gray" style="font-size: 0.9rem;">ألوان دافئة تجذب الانتباه للمأكولات.</p>
          </div>
          <div class="hover-action" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s;">
             <button class="btn btn-primary">استخدم هذا النموذج</button>
          </div>
       </div>
    </div>
  `;

  const style = document.createElement('style');
  style.innerHTML = `
    .template-card:hover .hover-action { opacity: 1 !important; }
    
    @media (max-width: 900px) {
      .masonry-grid { column-count: 2 !important; }
    }
    @media (max-width: 600px) {
      .masonry-grid { column-count: 1 !important; }
    }
  `;
  container.appendChild(style);

  return container;
}
