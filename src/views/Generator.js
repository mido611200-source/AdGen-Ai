export default function GeneratorPage() {
  const container = document.createElement('div');
  container.className = 'generator-page h-full flex';
  container.style.minHeight = 'calc(100vh - 80px)';

  container.innerHTML = `
    <!-- Right Panel: Input Form (35%) -->
    <aside class="form-panel" style="width: 35%; background: var(--white); border-left: 1px solid var(--gray-200); padding: var(--space-6); overflow-y: auto; display: flex; flex-direction: column; z-index: 10;">
      <h2 class="font-bold mb-6 text-primary" style="font-size: 1.5rem;">قم بإعداد إعلانك ✨</h2>
      
      <form id="generator-form">
        <!-- 1. Design Category -->
        <div class="form-group mb-8">
          <label class="form-label" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px; display: inline-block;">1. فئة التصميم</label>
          <select class="form-control mt-4">
            <option>العروض التجارية</option>
            <option>إطلاق منتج جديد</option>
            <option>توعية بالعلامة التجارية</option>
          </select>
          <p class="text-gray mt-2" style="font-size: 0.8rem;">اختر الفئة الأنسب للهدف من حملتك الإعلانية.</p>
        </div>

        <!-- 2. Design Description -->
        <div class="form-group mb-8">
          <label class="form-label" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px; display: inline-block;">2. صف تصميمك بجملة واحدة</label>
          <textarea class="form-control mt-4" placeholder="مثال: آيفون 15 برو ماكس - كان 4499 ريال الآن 3399 ريال توصيل مجاني" style="min-height: 120px;"></textarea>
          <p class="text-gray mt-2" style="font-size: 0.8rem;">سنجعل الذكاء الاصطناعي يحول هذه الجملة إلى تصميم احترافي متكامل.</p>
        </div>

        <!-- 3. Additional Options -->
        <div class="form-group mb-8">
          <label class="form-label mb-4" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px; display: inline-block;">3. خيارات إضافية</label>
          
          <label class="form-label mt-2" style="font-size: 0.9rem;">نمط الصورة (Image Style)</label>
          <select class="form-control mb-4">
            <option>تلقائي</option>
            <option>واقعي 3D</option>
            <option>رسم رقمي مسطح</option>
            <option>تجريدي</option>
          </select>

          <label class="form-label" style="font-size: 0.9rem;">وضع النص العربي</label>
          <div class="flex gap-2 mb-4">
            <label style="flex:1; cursor: pointer;">
               <input type="radio" name="text-placement" value="integrated" checked style="display:none;">
               <div class="text-btn card text-center" style="padding: var(--space-2);">
                  <div style="font-size: 0.8rem; font-weight: bold;">نص مدمج في الصورة</div>
               </div>
            </label>
            <label style="flex:1; cursor: pointer;">
               <input type="radio" name="text-placement" value="later" style="display:none;">
               <div class="text-btn card text-center" style="padding: var(--space-2);">
                  <div style="font-size: 0.8rem; font-weight: bold;">إضافة النص لاحقاً</div>
               </div>
            </label>
          </div>

          <label class="form-label" style="font-size: 0.9rem;">عدد التصاميم</label>
          <div class="flex gap-2 mb-2">
            <label style="flex:1; cursor: pointer;">
               <input type="radio" name="variations" value="1" checked style="display:none;">
               <div class="var-btn card text-center" style="padding: var(--space-2); font-weight: bold;">1</div>
            </label>
            <label style="flex:1; cursor: pointer;">
               <input type="radio" name="variations" value="2" style="display:none;">
               <div class="var-btn card text-center" style="padding: var(--space-2); font-weight: bold;">2</div>
            </label>
            <label style="flex:1; cursor: pointer;">
               <input type="radio" name="variations" value="3" style="display:none;">
               <div class="var-btn card text-center" style="padding: var(--space-2); font-weight: bold;">3</div>
            </label>
            <label style="flex:1; cursor: pointer;">
               <input type="radio" name="variations" value="4" style="display:none;">
               <div class="var-btn card text-center" style="padding: var(--space-2); font-weight: bold;">4</div>
            </label>
          </div>
          <p class="text-gray" style="font-size: 0.8rem;">إنشاء خيارات أكثر قد يزيد من وقت التوليد.</p>
        </div>

        <!-- 4. Design Size -->
        <div class="form-group mb-8">
          <label class="form-label mb-4" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px; display: inline-block;">4. حجم التصميم</label>
          <div class="grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2);">
            <label style="cursor: pointer;">
               <input type="radio" name="formatize" value="square" checked style="display:none;">
               <div class="size-btn card flex flex-col items-center justify-center gap-2" style="padding: var(--space-3);">
                  <div style="width: 40px; height: 40px; border: 2px dashed var(--gray-400);"></div>
                  <span style="font-size: 0.8rem; font-weight: bold; text-align: center;">منشور مربع<br><span style="font-weight: normal; color: var(--gray-600);">1080×1080</span></span>
               </div>
            </label>
            <label style="cursor: pointer;">
               <input type="radio" name="formatize" value="story" style="display:none;">
               <div class="size-btn card flex flex-col items-center justify-center gap-2" style="padding: var(--space-3);">
                  <div style="width: 25px; height: 44px; border: 2px dashed var(--gray-400);"></div>
                  <span style="font-size: 0.8rem; font-weight: bold; text-align: center;">ستوري<br><span style="font-weight: normal; color: var(--gray-600);">1920×1080</span></span>
               </div>
            </label>
            <label style="cursor: pointer;">
               <input type="radio" name="formatize" value="horizontal" style="display:none;">
               <div class="size-btn card flex flex-col items-center justify-center gap-2" style="padding: var(--space-3);">
                  <div style="width: 60px; height: 30px; border: 2px dashed var(--gray-400);"></div>
                  <span style="font-size: 0.8rem; font-weight: bold; text-align: center;">بانر أفقي</span>
               </div>
            </label>
            <label style="cursor: pointer;">
               <input type="radio" name="formatize" value="a4" style="display:none;">
               <div class="size-btn card flex flex-col items-center justify-center gap-2" style="padding: var(--space-3);">
                  <div style="width: 30px; height: 42px; border: 2px dashed var(--gray-400);"></div>
                  <span style="font-size: 0.8rem; font-weight: bold; text-align: center;">فلير A4</span>
               </div>
            </label>
          </div>
        </div>

        <!-- 5. Image Upload -->
        <div class="form-group mb-8">
          <label class="form-label mb-4" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px; display: inline-block;">5. رفع الصور</label>
          
          <label class="form-label mt-2" style="font-size: 0.9rem;">صورة المنتج</label>
          <div class="drag-drop-zone mb-4" style="padding: var(--space-4);">
            <i class="ph ph-image" style="font-size: 2rem;"></i>
            <p class="font-bold">ارفع صورة المنتج</p>
            <p style="font-size: 0.7rem; color: var(--gray-400);">PNG, JPG, WebP</p>
          </div>

          <label class="form-label" style="font-size: 0.9rem;">الشعار</label>
          <div class="drag-drop-zone" style="padding: var(--space-4);">
            <i class="ph ph-cube" style="font-size: 2rem;"></i>
            <p class="font-bold">ارفع الشعار</p>
            <p style="font-size: 0.7rem; color: var(--gray-400);">PNG, JPG, SVG</p>
          </div>
        </div>

        <!-- 6. Contact Information -->
        <div class="form-group mb-8">
          <label class="form-label mb-4" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px; display: inline-block;">6. معلومات التواصل (اختياري)</label>
          
          <div class="grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
            <div>
              <input type="text" class="form-control" placeholder="رقم الهاتف">
            </div>
            <div>
              <input type="email" class="form-control" placeholder="البريد الإلكتروني">
            </div>
            <div>
              <input type="text" class="form-control" placeholder="الموقع الإلكتروني">
            </div>
            <div>
              <input type="text" class="form-control" placeholder="العنوان">
            </div>
          </div>
        </div>

        <!-- 7. Badges and Labels -->
        <div class="form-group mb-8">
          <label class="form-label mb-2" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px; display: inline-block;">7. الشارات والعلامات</label>
          <select class="form-control">
            <option>بدون شارة</option>
            <option>أصلي</option>
            <option>إصدار محدود</option>
            <option>مضمون</option>
            <option>حصري</option>
            <option>%100 أصلي</option>
            <option>الأكثر مبيعاً</option>
            <option>وصل حديثاً</option>
          </select>
        </div>

        <!-- 8. Price Display -->
        <div class="form-group mb-8">
          <label class="form-label mb-4 flex items-center justify-between" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px;">
            <span>8. عرض الأسعار</span>
            <label class="toggle-switch" style="position: relative; display: inline-block; width: 44px; height: 24px; cursor: pointer;">
              <input type="checkbox" id="price-toggle" style="opacity: 0; width: 0; height: 0;">
              <span class="slider" style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--gray-400); transition: .4s; border-radius: 20px;"></span>
              <span class="slider-thumb" style="position: absolute; content: ''; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%;"></span>
            </label>
          </label>
          
          <div id="price-fields" class="grid" style="display: none; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
             <div>
               <label class="form-label" style="font-size: 0.8rem;">السعر الأصلي</label>
               <input type="text" class="form-control" placeholder="مثال: 4499 SAR">
             </div>
             <div>
               <label class="form-label" style="font-size: 0.8rem;">سعر البيع</label>
               <input type="text" class="form-control" placeholder="مثال: 3399 SAR">
             </div>
          </div>
        </div>

        <!-- 9. Payment Methods -->
        <div class="form-group mb-8">
          <label class="form-label mb-4" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px; display: inline-block;">9. طرق الدفع (اختياري)</label>
          
          <label class="form-label" style="font-size: 0.9rem;">الدولة</label>
          <select class="form-control mb-4">
             <option>السعودية</option>
             <option>الإمارات</option>
             <option>مصر</option>
             <option>الكويت</option>
             <option>قطر</option>
             <option>البحرين</option>
             <option>عمان</option>
          </select>

          <label class="form-label" style="font-size: 0.9rem;">وسائل الدفع</label>
          <div class="flex gap-2 payment-methods" style="flex-wrap: wrap;">
             <label class="payment-check flex items-center gap-2">
               <input type="checkbox"> <span>مدى</span>
             </label>
             <label class="payment-check flex items-center gap-2">
               <input type="checkbox"> <span>STC Pay</span>
             </label>
             <label class="payment-check flex items-center gap-2">
               <input type="checkbox"> <span>تابي</span>
             </label>
             <label class="payment-check flex items-center gap-2">
               <input type="checkbox"> <span>تمارا</span>
             </label>
             <label class="payment-check flex items-center gap-2">
               <input type="checkbox"> <span>Apple Pay</span>
             </label>
             <label class="payment-check flex items-center gap-2">
               <input type="checkbox"> <span>فيزا</span>
             </label>
             <label class="payment-check flex items-center gap-2">
               <input type="checkbox"> <span>ماستر كارد</span>
             </label>
          </div>
        </div>

        <!-- 10. Occasions -->
        <div class="form-group mb-8">
          <label class="form-label mb-2" style="font-size: 1.1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 4px; display: inline-block;">10. المناسبات (اختياري)</label>
          <select class="form-control">
             <option value="">لا يوجد مناسبة محددة</option>
             <optgroup label="المناسبات الإسلامية">
                <option>رمضان</option>
                <option>عيد الفطر</option>
                <option>عيد الأضحى</option>
             </optgroup>
             <optgroup label="الأعياد الوطنية">
                <option>اليوم الوطني السعودي</option>
                <option>يوم التأسيس</option>
             </optgroup>
             <optgroup label="المناسبات التجارية">
                <option>الجمعة السوداء</option>
             </optgroup>
          </select>
        </div>
      </form>
      
      <!-- Sticky CTA Button -->
      <div style="position: sticky; bottom: -24px; background: white; padding: var(--space-4) 0; border-top: 1px solid var(--gray-100); margin-top: auto;">
         <button id="generate-btn" class="btn btn-primary w-full" style="font-size: 1.2rem; padding: var(--space-4);">
            إنشاء التصميم ✨
         </button>
      </div>
    </aside>

    <!-- Left Panel: Live Preview (65%) -->
    <main class="preview-panel" style="width: 65%; background: var(--gray-100); padding: var(--space-8); display: flex; flex-direction: column; position: relative;">
      
      <!-- Empty State -->
      <div id="empty-state" class="flex flex-col items-center justify-center h-full text-center" style="opacity: 1; transition: opacity 0.3s;">
        <div style="width: 300px; height: 300px; border: 2px dashed var(--gray-400); border-radius: var(--radius-lg); display: flex; flex-direction: column; items-center; justify-content: center; background: rgba(255,255,255,0.5); color: var(--gray-400); margin-bottom: var(--space-6);">
           <i class="ph-fill ph-magic-wand" style="font-size: 4rem; margin-bottom: var(--space-4); color: var(--gray-400);"></i>
           <p style="padding: 0 var(--space-4);">قم بملء البيانات على اليمين لتبدأ السحر هنا</p>
        </div>
      </div>

      <!-- Loading State -->
      <div id="loading-state" class="flex flex-col items-center justify-center h-full text-center" style="display: none; position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(247, 250, 252, 0.9); z-index: 5;">
         <div class="pulse-container" style="position: relative; width: 80px; height: 80px; margin-bottom: var(--space-6);">
            <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: var(--primary); opacity: 0.2; animation: pulse-glow 2s infinite;"></div>
            <i class="ph-fill ph-sparkle text-primary" style="font-size: 3rem; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></i>
         </div>
         <h3 class="font-bold text-primary mb-2" style="font-size: 1.5rem;" id="loading-text">نحلل الطلب...</h3>
         <p class="text-gray" id="loading-subtext">الذكاء الاصطناعي يستخرج المتطلبات لبناء التصميم.</p>
         
         <div style="width: 300px; height: 4px; background: var(--gray-200); border-radius: 2px; margin-top: var(--space-6); overflow: hidden;">
            <div id="progress-bar" style="height: 100%; width: 5%; background: var(--gradient-primary); transition: width 0.3s ease;"></div>
         </div>
      </div>

      <!-- Results State -->
      <div id="results-state" style="display: none; height: 100%; flex-direction: column;">
        <div class="flex justify-between items-center mb-6">
           <h3 class="font-bold" style="font-size: 1.5rem;">الخيارات المقترحة (4)</h3>
           <div class="flex gap-2">
              <button class="btn btn-secondary"><i class="ph ph-download-simple"></i> تحميل الكل</button>
           </div>
        </div>

        <div class="results-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); overflow-y: auto; padding-bottom: var(--space-8); flex-grow: 1;">
           
           <!-- Card 1 -->
           <div class="card result-card" style="position: relative; height: 400px; background: url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80') center/cover;">
              <div class="overlay flex flex-col items-center justify-center gap-4" style="position: absolute; inset: 0; background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; padding: var(--space-4);">
                 <button class="btn btn-primary w-full"><i class="ph-bold ph-download-simple"></i> تحميل التصميم</button>
                 <div class="flex gap-2 w-full">
                    <button class="btn btn-secondary" style="flex:1;"><i class="ph-bold ph-arrows-clockwise"></i> توليد بديل</button>
                    <button class="btn btn-secondary" style="flex:1;"><i class="ph-bold ph-pencil-simple"></i> تعديل</button>
                 </div>
              </div>
           </div>

           <!-- Card 2 -->
           <div class="card result-card" style="position: relative; height: 400px; background: url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80') center/cover;">
              <div class="overlay flex flex-col items-center justify-center gap-4" style="position: absolute; inset: 0; background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; padding: var(--space-4);">
                 <button class="btn btn-primary w-full"><i class="ph-bold ph-download-simple"></i> تحميل التصميم</button>
                 <div class="flex gap-2 w-full">
                    <button class="btn btn-secondary" style="flex:1;"><i class="ph-bold ph-arrows-clockwise"></i> توليد بديل</button>
                    <button class="btn btn-secondary" style="flex:1;"><i class="ph-bold ph-pencil-simple"></i> تعديل</button>
                 </div>
              </div>
           </div>

           <!-- Card 3 & 4 (Placeholders) -->
           <div class="card result-card" style="position: relative; height: 400px; background: url('https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80') center/cover;">
              <div class="overlay flex flex-col items-center justify-center gap-4" style="position: absolute; inset: 0; background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; padding: var(--space-4);">
                 <button class="btn btn-primary w-full"><i class="ph-bold ph-download-simple"></i> تحميل التصميم</button>
              </div>
           </div>
           
           <div class="card result-card" style="position: relative; height: 400px; background: url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80') center/cover;">
              <div class="overlay flex flex-col items-center justify-center gap-4" style="position: absolute; inset: 0; background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; padding: var(--space-4);">
                 <button class="btn btn-primary w-full"><i class="ph-bold ph-download-simple"></i> تحميل التصميم</button>
              </div>
           </div>

        </div>
      </div>
    </main>
  `;

  // Attach Styles dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    .result-card:hover .overlay { opacity: 1 !important; }
    
    .text-btn, .var-btn, .size-btn { 
      border: 1px solid var(--gray-200); 
      background: white; 
      color: var(--gray-800); 
      transition: all 0.2s; 
    }
    input[type="radio"]:checked + .text-btn,
    input[type="radio"]:checked + .var-btn {
      border: 2px solid var(--primary) !important;
      background: var(--primary-light) !important;
      color: white !important;
    }
    input[type="radio"]:checked + .size-btn {
      border: 2px solid var(--primary) !important;
      background: var(--gray-100) !important;
      color: var(--primary) !important;
    }
    
    .payment-check {
      background: var(--gray-100); 
      padding: 6px 16px; 
      border-radius: 20px; 
      font-size: 0.85rem; 
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.2s;
    }
    .payment-check:hover {
      background: var(--gray-200);
    }
    .payment-check input:checked ~ span {
      font-weight: bold;
      color: var(--primary);
    }
    .payment-check:has(input:checked) {
      background: var(--primary-light);
      border-color: var(--primary);
      color: white;
    }
    .payment-check:has(input:checked) span {
      color: white;
    }
  `;
  container.appendChild(style);

  setTimeout(() => {
    // Generate Button Logic Simulation
    const btn = container.querySelector('#generate-btn');
    const emptyState = container.querySelector('#empty-state');
    const loadingState = container.querySelector('#loading-state');
    const resultsState = container.querySelector('#results-state');
    const loadingText = container.querySelector('#loading-text');
    const loadingSubtext = container.querySelector('#loading-subtext');
    const progressBar = container.querySelector('#progress-bar');
    
    // Toggle switch logic for price-fields
    const priceToggle = container.querySelector('#price-toggle');
    const priceFields = container.querySelector('#price-fields');
    if(priceToggle) {
      priceToggle.addEventListener('change', (e) => {
        priceFields.style.display = e.target.checked ? 'grid' : 'none';
        e.target.nextElementSibling.style.backgroundColor = e.target.checked ? 'var(--primary)' : 'var(--gray-400)';
        e.target.nextElementSibling.nextElementSibling.style.transform = e.target.checked ? 'translateX(-22px)' : 'translateX(0)';
      });
    }

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Hide empty, show loading
        emptyState.style.display = 'none';
        resultsState.style.display = 'none';
        loadingState.style.display = 'flex';
        
        let progress = 10;
        progressBar.style.width = '10%';
        
        const phases = [
          { text: 'نحلل التصميم والصور...', subtext: 'استخراج الأنماط ومطابقة المتطلبات.', prog: 30, delay: 1000 },
          { text: 'ننسق الكتل البصرية...', subtext: 'ترتيب النصوص والصور والمعلومات الشرائية.', prog: 60, delay: 2500 },
          { text: 'نطبق لمسات الهوية والعلامات...', subtext: 'دمج الشارات وتسعيرة العرض.', prog: 85, delay: 4000 },
          { text: 'اللمسات السحرية الأخيرة...', subtext: 'تجهيز التصاميم للتحميل.', prog: 100, delay: 5500 }
        ];

        phases.forEach(phase => {
          setTimeout(() => {
            loadingText.textContent = phase.text;
            loadingSubtext.textContent = phase.subtext;
            progressBar.style.width = phase.prog + '%';
          }, phase.delay);
        });

        setTimeout(() => {
            loadingState.style.display = 'none';
            resultsState.style.display = 'flex';
            resultsState.className = 'animate-fade-in';
        }, 6500);
      });
    }
  }, 100);

  return container;
}
