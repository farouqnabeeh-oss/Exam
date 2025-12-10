// ==================== إعدادات النظام ====================
const SYSTEM_CONFIG = {
  APP_NAME: "نظام الاختبارات الإلكتروني",
  VERSION: "2.0",
  MAX_ATTEMPTS: 3,
  LOCK_TIME: 5, // دقائق
};

// ==================== بيانات المستخدمين ====================
// تخزين محلي للمستخدمين
let users = JSON.parse(localStorage.getItem("examUsers")) || [];

// ==================== بيانات الأسئلة ====================
const questions = [
  {
    id: 1,
    type: "HTML",
    text: "ما هو العنصر الصحيح لإنشاء رابط؟",
    options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"],
    correct: 1,
  },
  {
    id: 2,
    type: "HTML",
    text: "ما هو العنصر لإدراج صورة؟",
    options: [
      "&lt;img&gt;",
      "&lt;picture&gt;",
      "&lt;image&gt;",
      "&lt;photo&gt;",
    ],
    correct: 0,
  },
  {
    id: 3,
    type: "HTML",
    text: "ما هي سمة النص البديل للصورة؟",
    options: ["title", "alt", "src", "description"],
    correct: 1,
  },
  {
    id: 4,
    type: "HTML",
    text: "العنصر لقائمة غير مرتبة؟",
    options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
    correct: 1,
  },
  {
    id: 5,
    type: "HTML",
    text: "العنصر لإنشاء جدول؟",
    options: ["&lt;table&gt;", "&lt;tr&gt;", "&lt;td&gt;", "&lt;grid&gt;"],
    correct: 0,
  },
  {
    id: 6,
    type: "CSS",
    text: "كيف نشير إلى كلاس في CSS؟",
    options: [".id", "#id", "*id", "id"],
    correct: 1,
  },
  {
    id: 7,
    type: "CSS",
    text: "الخاصية لتغيير لون النص؟",
    options: ["text-color", "font-color", "color", "foreground"],
    correct: 2,
  },
  {
    id: 8,
    type: "CSS",
    text: "الخاصية لتغيير لون الخلفية؟",
    options: ["bgcolor", "background-color", "color-background", "bg"],
    correct: 1,
  },
  {
    id: 9,
    type: "CSS",
    text: "الخاصية لتحديد حجم الخط؟",
    options: ["text-size", "font-size", "font-weight", "size"],
    correct: 1,
  },
  {
    id: 10,
    type: "CSS",
    text: "الخاصية لمحاذاة النص؟",
    options: ["text-align", "align", "alignment", "text-position"],
    correct: 0,
  },
  {
    id: 11,
    type: "HTML",
    text: "السمة لجعل الحقل إلزامياً؟",
    options: ["required", "validate", "mandatory", "important"],
    correct: 0,
  },
  {
    id: 12,
    type: "HTML",
    text: "العنصر للقائمة المنسدلة؟",
    options: [
      "&lt;select&gt;",
      "&lt;dropdown&gt;",
      "&lt;option&gt;",
      "&lt;list&gt;",
    ],
    correct: 0,
  },
  {
    id: 13,
    type: "HTML",
    text: "السمة التي تحدد طريقة إرسال النموذج؟",
    options: ["action", "method", "type", "submit"],
    correct: 1,
  },
  {
    id: 14,
    type: "HTML",
    text: "العنصر لإنشاء قسم؟",
    options: [
      "&lt;div&gt;",
      "&lt;span&gt;",
      "&lt;section&gt;",
      "&lt;article&gt;",
    ],
    correct: 0,
  },
  {
    id: 15,
    type: "HTML",
    text: "السمة لتحديد معرف فريد؟",
    options: ["class", "id", "name", "type"],
    correct: 1,
  },
  {
    id: 16,
    type: "CSS",
    text: "الخاصية لسمك الخط؟",
    options: ["font-weight", "text-weight", "font-thickness", "weight"],
    correct: 0,
  },
  {
    id: 17,
    type: "CSS",
    text: "الخاصية لتزيين النص؟",
    options: ["text-decoration", "font-decoration", "text-style", "decoration"],
    correct: 0,
  },
  {
    id: 18,
    type: "CSS",
    text: "الخاصية لنوع الخط؟",
    options: ["font-family", "text-family", "font-type", "typeface"],
    correct: 0,
  },
  {
    id: 19,
    type: "CSS",
    text: "الخاصية للهامش الخارجي؟",
    options: ["margin", "padding", "border", "spacing"],
    correct: 0,
  },
  {
    id: 20,
    type: "CSS",
    text: "الخاصية للحشوة الداخلية؟",
    options: ["padding", "margin", "border", "inner-space"],
    correct: 0,
  },
  {
    id: 21,
    type: "HTML",
    text: "ما هو العنصر لإنشاء فقرة؟",
    options: ["&lt;p&gt;", "&lt;para&gt;", "&lt;paragraph&gt;", "&lt;text&gt;"],
    correct: 0,
  },
  {
    id: 22,
    type: "HTML",
    text: "السمة لتحديد النص عند مرور الماوس؟",
    options: ["hover", "title", "tooltip", "alt"],
    correct: 1,
  },
  {
    id: 23,
    type: "HTML",
    text: "العنصر لإنشاء عنوان رئيسي؟",
    options: ["&lt;head&gt;", "&lt;header&gt;", "&lt;h1&gt;", "&lt;title&gt;"],
    correct: 2,
  },
  {
    id: 24,
    type: "HTML",
    text: "ما هو العنصر لعرض كود برمجي؟",
    options: [
      "&lt;code&gt;",
      "&lt;pre&gt;",
      "&lt;script&gt;",
      "&lt;console&gt;",
    ],
    correct: 0,
  },
  {
    id: 25,
    type: "HTML",
    text: "العنصر لإنشاء خط أفقي؟",
    options: ["&lt;hr&gt;", "&lt;line&gt;", "&lt;br&gt;", "&lt;horizontal&gt;"],
    correct: 0,
  },
  {
    id: 26,
    type: "HTML",
    text: "السمة لفتح الرابط في نافذة جديدة؟",
    options: ["new", "target", "window", "open"],
    correct: 1,
  },
  {
    id: 27,
    type: "HTML",
    text: "العنصر لإنشاء قائمة مرتبة؟",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
    correct: 1,
  },
  {
    id: 28,
    type: "HTML",
    text: "ما هو العنصر لإنشاء نموذج؟",
    options: [
      "&lt;form&gt;",
      "&lt;input&gt;",
      "&lt;submit&gt;",
      "&lt;model&gt;",
    ],
    correct: 0,
  },
  {
    id: 29,
    type: "HTML",
    text: "العنصر لزر الإرسال في النموذج؟",
    options: [
      "&lt;button&gt;",
      "&lt;submit&gt;",
      "&lt;input&gt;",
      "&lt;send&gt;",
    ],
    correct: 0,
  },
  {
    id: 30,
    type: "HTML",
    text: "السمة لتحديد قيمة الحقل الافتراضية؟",
    options: ["value", "default", "initial", "text"],
    correct: 0,
  },
  {
    id: 31,
    type: "CSS",
    text: "كيف نشير إلى عنصر فريد في CSS؟",
    options: [".class", "#class", "*class", "class"],
    correct: 1,
  },
  {
    id: 32,
    type: "CSS",
    text: "الخاصية لتحويل النص إلى أحرف كبيرة؟",
    options: ["text-transform", "font-transform", "uppercase", "capitalize"],
    correct: 0,
  },
  {
    id: 33,
    type: "CSS",
    text: "الخاصية لإضافة ظل للنص؟",
    options: ["text-shadow", "font-shadow", "shadow", "box-shadow"],
    correct: 0,
  },
  {
    id: 34,
    type: "CSS",
    text: "الخاصية لتحديد تباعد الأسطر؟",
    options: ["line-height", "text-spacing", "spacing", "height"],
    correct: 0,
  },
  {
    id: 35,
    type: "CSS",
    text: "الخاصية لتحديد عرض العنصر؟",
    options: ["width", "size", "length", "dimension"],
    correct: 0,
  },
  {
    id: 36,
    type: "CSS",
    text: "الخاصية لتحديد ارتفاع العنصر؟",
    options: ["height", "size", "vertical", "dimension"],
    correct: 0,
  },
  {
    id: 37,
    type: "CSS",
    text: "الخاصية لوضع الخلفية؟",
    options: ["background-position", "bg-position", "position", "place"],
    correct: 0,
  },
  {
    id: 38,
    type: "CSS",
    text: "الخاصية لتكرار الخلفية؟",
    options: ["background-repeat", "repeat", "bg-repeat", "tile"],
    correct: 0,
  },
  {
    id: 39,
    type: "CSS",
    text: "الخاصية لتحديد الحدود؟",
    options: ["border", "outline", "frame", "edge"],
    correct: 0,
  },
  {
    id: 40,
    type: "CSS",
    text: "الخاصية لنمط الحدود؟",
    options: ["border-style", "border-type", "style", "frame-style"],
    correct: 0,
  },
  {
    id: 41,
    type: "CSS",
    text: "الخاصية لتحديد نصف قطر الزوايا؟",
    options: ["border-radius", "corner-radius", "radius", "round"],
    correct: 0,
  },
  {
    id: 42,
    type: "CSS",
    text: "الخاصية لإضافة ظل للعنصر؟",
    options: ["box-shadow", "element-shadow", "shadow", "drop-shadow"],
    correct: 0,
  },
  {
    id: 43,
    type: "CSS",
    text: "الخاصية لتحديد موضع العنصر؟",
    options: ["position", "place", "location", "coordinates"],
    correct: 0,
  },
  {
    id: 44,
    type: "CSS",
    text: "القيمة لجعل العنصر ثابتاً؟",
    options: ["fixed", "static", "absolute", "sticky"],
    correct: 0,
  },
  {
    id: 45,
    type: "CSS",
    text: "الخاصية التي نستخدمها في كتابة الانيمشن",
    options: ["@keyfreams", "transition", "transform", "display"],
    correct: 0,
  },
  {
    id: 46,
    type: "CSS",
    text: "الخاصية للمسافة بين العناصر؟",
    options: ["gap", "spacing", "margin", "space"],
    correct: 0,
  },
  {
    id: 47,
    type: "CSS",
    text: "الخاصية لمحاذاة العناصر عمودياً؟",
    options: ["align-items", "vertical-align", "align", "justify"],
    correct: 0,
  },
  {
    id: 48,
    type: "CSS",
    text: "الخاصية لمحاذاة العناصر أفقياً؟",
    options: ["justify-content", "horizontal-align", "align", "justify"],
    correct: 0,
  },
  {
    id: 49,
    type: "CSS",
    text: "الخاصية لتغيير مؤشر الماوس؟",
    options: ["cursor", "pointer", "mouse", "icon"],
    correct: 0,
  },
  {
    id: 50,
    type: "CSS",
    text: "الخاصية للشفافية؟",
    options: ["opacity", "transparency", "alpha", "clear"],
    correct: 0,
  },
  {
    id: 51,
    type: "HTML",
    text: "ما هو العنصر لإنشاء تذييل الصفحة؟",
    options: [
      "&lt;footer&gt;",
      "&lt;bottom&gt;",
      "&lt;end&gt;",
      "&lt;last&gt;",
    ],
    correct: 0,
  },
  {
    id: 52,
    type: "HTML",
    text: "العنصر لإنشاء رأس الصفحة؟",
    options: [
      "&lt;header&gt;",
      "&lt;head&gt;",
      "&lt;top&gt;",
      "&lt;navbar&gt;",
    ],
    correct: 0,
  },
  {
    id: 53,
    type: "HTML",
    text: "السمة لتحديد اتجاه النص؟",
    options: ["direction", "text-direction", "align", "rtl"],
    correct: 0,
  },
  {
    id: 54,
    type: "HTML",
    text: "العنصر لإنشاء حقل بحث؟",
    options: [
      "&lt;input type='search'&gt;",
      "&lt;search&gt;",
      "&lt;find&gt;",
      "&lt;lookup&gt;",
    ],
    correct: 0,
  },
  {
    id: 55,
    type: "HTML",
    text: "السمة لجعل الحقل للقراءة فقط؟",
    options: ["readonly", "disabled", "static", "lock"],
    correct: 0,
  },
  {
    id: 56,
    type: "HTML",
    text: "العنصر لإنشاء شريط التقدم؟",
    options: [
      "&lt;progress&gt;",
      "&lt;meter&gt;",
      "&lt;bar&gt;",
      "&lt;range&gt;",
    ],
    correct: 0,
  },
  {
    id: 57,
    type: "HTML",
    text: "السمة لتحديد النمط المباشر؟",
    options: ["style", "css", "design", "look"],
    correct: 0,
  },
  {
    id: 58,
    type: "CSS",
    text: "الخاصية لتحديد اتجاه المرونة؟",
    options: ["flex-direction", "direction", "flex-flow", "orientation"],
    correct: 0,
  },
  {
    id: 59,
    type: "CSS",
    text: "الخاصية لتفاف العناصر؟",
    options: ["flex-wrap", "wrap", "flow-wrap", "break"],
    correct: 0,
  },
  {
    id: 60,
    type: "CSS",
    text: "الخاصية لنمو العنصر المرن؟",
    options: ["flex-grow", "grow", "expand", "flex-size"],
    correct: 0,
  },
];

// ==================== حالة النظام ====================
const system = {
  currentUser: null,
  currentQuestion: 0,
  answers: new Array(questions.length).fill(null),
  timeLeft: 120 * 60, // 30 دقيقة
  timer: null,
  startTime: null,
};

// ==================== إدارة البطاقات ====================
function showCard(cardId) {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });
  document.getElementById(cardId).classList.add("active");
  window.scrollTo(0, 0);
}

function showMessage(elementId, text, type) {
  const element = document.getElementById(elementId);
  element.textContent = text;
  element.className = `message ${type}`;
  element.style.display = "block";

  setTimeout(() => {
    element.style.display = "none";
  }, 5000);
}

// ==================== تسجيل مستخدم جديد ====================
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // التحقق من البيانات
    if (!name || !username || !email || !password) {
      showMessage("registerMessage", "يرجى ملء جميع الحقول", "error");
      return;
    }

    if (password.length < 8) {
      showMessage(
        "registerMessage",
        "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
        "error"
      );
      return;
    }

    if (password !== confirmPassword) {
      showMessage("registerMessage", "كلمة المرور غير متطابقة", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("registerMessage", "البريد الإلكتروني غير صحيح", "error");
      return;
    }

    // التحقق من عدم تكرار اسم المستخدم
    if (users.some((user) => user.username === username)) {
      showMessage("registerMessage", "اسم المستخدم موجود بالفعل", "error");
      return;
    }

    // إنشاء مستخدم جديد
    const newUser = {
      id: Date.now(),
      name: name,
      username: username,
      email: email,
      password: btoa(password), // تشفير بسيط
      createdAt: new Date().toISOString(),
      lastLogin: null,
      testsTaken: 0,
      bestScore: 0,
    };

    // حفظ المستخدم
    users.push(newUser);
    localStorage.setItem("examUsers", JSON.stringify(users));

    // إظهار رسالة النجاح
    showMessage(
      "registerMessage",
      "✅ تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول",
      "success"
    );

    // تفريغ النموذج
    this.reset();

    // الانتقال تلقائياً إلى تسجيل الدخول بعد ثانيتين
    setTimeout(() => {
      showCard("loginCard");
    }, 2000);
  });

// ==================== تسجيل الدخول ====================
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    showMessage(
      "loginMessage",
      "يرجى إدخال اسم المستخدم وكلمة المرور",
      "error"
    );
    return;
  }

  // البحث عن المستخدم
  const user = users.find((u) => u.username === username);

  if (!user) {
    showMessage("loginMessage", "اسم المستخدم غير صحيح", "error");
    return;
  }

  // التحقق من كلمة المرور
  if (btoa(password) !== user.password) {
    showMessage("loginMessage", "كلمة المرور غير صحيحة", "error");
    return;
  }

  // تحديث آخر دخول
  user.lastLogin = new Date().toISOString();
  localStorage.setItem("examUsers", JSON.stringify(users));

  // حفظ بيانات المستخدم الحالي
  system.currentUser = user;

  // إظهار رسالة النجاح
  showMessage(
    "loginMessage",
    `مرحباً ${user.name}! جاري تحميل النظام...`,
    "success"
  );

  // الانتقال إلى صفحة الاختبار بعد ثانيتين
  setTimeout(() => {
    startExam();
    showCard("examCard");
  }, 2000);
});

// ==================== بدء الاختبار ====================
function startExam() {
  // تفريغ الإجابات السابقة
  system.currentQuestion = 0;
  system.answers = new Array(questions.length).fill(null);
  system.timeLeft = 120 * 60;
  system.startTime = new Date();

  // بدء المؤقت
  startTimer();

  // عرض السؤال الأول
  showQuestion(system.currentQuestion);

  // إعداد الأزرار
  document.getElementById("prevBtn").onclick = showPrevQuestion;
  document.getElementById("nextBtn").onclick = showNextQuestion;
  document.getElementById("submitExam").onclick = submitExam;
  document.getElementById("logoutBtn").onclick = logout;

  // إعداد أزرار النتائج
  document.getElementById("retakeTest").onclick = startExam;
  document.getElementById("backToLoginFromResults").onclick = logout;
  document.getElementById("backToExam").onclick = () => {
    showCard("examCard");
    startExam();
  };
}

function showQuestion(index) {
  const q = questions[index];
  const container = document.getElementById("questionContainer");

  let optionsHTML = "";
  q.options.forEach((option, i) => {
    const isSelected = system.answers[index] === i;
    optionsHTML += `
                    <div class="option ${
                      isSelected ? "selected" : ""
                    }" onclick="selectAnswer(${index}, ${i})">
                        <div style="width: 30px; height: 30px; background: ${
                          isSelected ? "var(--success)" : "#E0E0E0"
                        }; 
                             color: ${
                               isSelected ? "white" : "#666"
                             }; border-radius: 50%; display: flex; 
                             align-items: center; justify-content: center; margin-left: 15px; font-weight: bold;">
                            ${String.fromCharCode(65 + i)}
                        </div>
                        <div>${option}</div>
                    </div>
                `;
  });

  container.innerHTML = `
                <div class="question-container">
                    <div class="question-header">
                        <div class="question-number">سؤال ${index + 1}</div>
                        <div style="color: var(--primary); font-weight: 600;">${
                          q.type
                        }</div>
                    </div>
                    <div class="question-text">${q.text}</div>
                    <div class="options">${optionsHTML}</div>
                </div>
            `;

  // تحديث شريط التقدم
  updateProgress();

  // تحديث أزرار التنقل
  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").textContent =
    index === questions.length - 1 ? "إنهاء" : "التالي";
}

function selectAnswer(questionIndex, answerIndex) {
  system.answers[questionIndex] = answerIndex;
  showQuestion(questionIndex);
}

function showPrevQuestion() {
  if (system.currentQuestion > 0) {
    system.currentQuestion--;
    showQuestion(system.currentQuestion);
  }
}

function showNextQuestion() {
  if (system.currentQuestion < questions.length - 1) {
    system.currentQuestion++;
    showQuestion(system.currentQuestion);
  } else {
    submitExam();
  }
}

function updateProgress() {
  const progress = ((system.currentQuestion + 1) / questions.length) * 100;
  document.getElementById("progress").style.width = `${progress}%`;
  document.getElementById("progressText").textContent = `سؤال ${
    system.currentQuestion + 1
  } من ${questions.length}`;
}

// ==================== المؤقت ====================
function startTimer() {
  if (system.timer) clearInterval(system.timer);

  updateTimerDisplay();
  system.timer = setInterval(() => {
    system.timeLeft--;
    updateTimerDisplay();

    if (system.timeLeft <= 0) {
      clearInterval(system.timer);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(system.timeLeft / 60);
  const seconds = system.timeLeft % 60;

  // تحديث الترويسة
  const header = document.querySelector("#examCard .card-header p");
  if (header) {
    header.textContent = `الوقت المتبقي: ${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
}

// ==================== إنهاء الاختبار ====================
function submitExam() {
  clearInterval(system.timer);

  if (!confirm("هل أنت متأكد من تسليم الإجابات؟")) return;

  // حساب النتائج
  calculateResults();

  // الانتقال إلى صفحة النتائج
  showCard("resultsCard");
}

function calculateResults() {
  let correct = 0;
  let wrong = 0;

  questions.forEach((q, i) => {
    if (system.answers[i] === q.correct) {
      correct++;
    } else if (system.answers[i] !== null) {
      wrong++;
    }
  });

  const totalTime = 120 * 60 - system.timeLeft;
  const minutesUsed = Math.floor(totalTime / 60);
  const percentage = Math.round((correct / questions.length) * 100);

  // تحديث بيانات المستخدم
  if (system.currentUser) {
    system.currentUser.testsTaken = (system.currentUser.testsTaken || 0) + 1;
    if (percentage > (system.currentUser.bestScore || 0)) {
      system.currentUser.bestScore = percentage;
    }

    // حفظ التحديثات
    const userIndex = users.findIndex((u) => u.id === system.currentUser.id);
    if (userIndex !== -1) {
      users[userIndex] = system.currentUser;
      localStorage.setItem("examUsers", JSON.stringify(users));
    }
  }

  // عرض النتائج
  document.getElementById("studentName").textContent =
    system.currentUser?.name || "طالب";
  document.getElementById("studentUsername").textContent =
    system.currentUser?.username || "مستخدم";
  document.getElementById("resultDate").textContent =
    new Date().toLocaleDateString("ar-SA");
  document.getElementById("correctCount").textContent = correct;
  document.getElementById("wrongCount").textContent = wrong;
  document.getElementById("timeTaken").textContent = `${minutesUsed} دقيقة`;
  document.getElementById("percentage").textContent = `${percentage}%`;
  document.getElementById("scoreValue").textContent = `${percentage}%`;

  // تحديث دائرة النتيجة
  const circle = document.querySelector(".score-circle");
  circle.style.background = `conic-gradient(var(--success) 0% ${percentage}%, #E0E0E0 ${percentage}% 100%)`;

  // تقييم الأداء
  const performanceText = document.getElementById("performanceText");
  if (percentage >= 90) {
    performanceText.textContent =
      "ممتاز! أداء رائع، لديك فهم قوي جداً في HTML وCSS.";
  } else if (percentage >= 75) {
    performanceText.textContent =
      "جيد جداً! لديك معرفة جيدة، يمكنك تحسين بعض النقاط البسيطة.";
  } else if (percentage >= 60) {
    performanceText.textContent =
      "مقبول! تحتاج إلى مراجعة بعض المفاهيم الأساسية.";
  } else if (percentage >= 50) {
    performanceText.textContent = "ضعيف! ننصحك بمراجعة شاملة للمادة.";
  } else {
    performanceText.textContent =
      "ضعيف جداً! يجب إعادة دراسة المادة من البداية.";
  }
}

// ==================== تسجيل الخروج ====================
function logout() {
  system.currentUser = null;
  showCard("loginCard");
  document.getElementById("loginForm").reset();
}

// ==================== وظائف مساعدة ====================
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==================== تحويل بين البطاقات ====================
document.getElementById("showRegister").addEventListener("click", function (e) {
  e.preventDefault();
  showCard("registerCard");
});

document.getElementById("showLogin").addEventListener("click", function (e) {
  e.preventDefault();
  showCard("loginCard");
});

document
  .getElementById("forgotPassword")
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert("لإعادة تعيين كلمة المرور، يرجى التواصل مع إدارة النظام.");
  });

// ==================== تهيئة النظام ====================
window.addEventListener("load", function () {
  console.log(`${SYSTEM_CONFIG.APP_NAME} - الإصدار ${SYSTEM_CONFIG.VERSION}`);
  console.log(`عدد المستخدمين المسجلين: ${users.length}`);

  // إضافة مستخدم افتراضي للتجربة
  if (users.length === 0) {
    const defaultUser = {
      id: 1,
      name: "طالب تجريبي",
      username: "student",
      email: "student@example.com",
      password: btoa("password123"),
      createdAt: new Date().toISOString(),
      testsTaken: 0,
      bestScore: 0,
    };
    users.push(defaultUser);
    localStorage.setItem("examUsers", JSON.stringify(users));

    console.log(
      "تم إنشاء مستخدم تجريبي: username: student, password: password123"
    );
  }

  // إظهار رسالة ترحيبية
  setTimeout(() => {
    if (document.getElementById("loginCard").classList.contains("active")) {
      showMessage(
        "loginMessage",
        "مرحباً بك في نظام الاختبارات! جرب المستخدم: student / password123",
        "success"
      );
    }
  }, 1000);
});

// ==================== اختصارات لوحة المفاتيح ====================
document.addEventListener("keydown", function (e) {
  if (document.getElementById("examCard").classList.contains("active")) {
    if (e.key === "ArrowRight" || e.key === "d") {
      showNextQuestion();
    } else if (e.key === "ArrowLeft" || e.key === "a") {
      showPrevQuestion();
    } else if (e.key >= "1" && e.key <= "4") {
      const optionIndex = parseInt(e.key) - 1;
      selectAnswer(system.currentQuestion, optionIndex);
    } else if (e.key === "Enter") {
      if (system.currentQuestion === questions.length - 1) {
        submitExam();
      } else {
        showNextQuestion();
      }
    }
  }
});

document.oncopy = () => {
  alert("حل لحالك يحلو😏");
  return false;
};

// سطر JavaScript واحد لمنع Screenshot والتحديد
document.head.insertAdjacentHTML(
  "beforeend",
  "<style>*{user-select:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;}::selection{background:transparent!important;}::-moz-selection{background:transparent!important;}</style>"
);
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (
    (e.ctrlKey || e.metaKey) &&
    (e.key == "c" ||
      e.key == "C" ||
      e.key == "PrintScreen" ||
      e.key == 44 ||
      e.key == "a" ||
      e.key == "A")
  )
    e.preventDefault();
  if (e.key == "F12") e.preventDefault();
});
document.addEventListener("selectstart", (e) => e.preventDefault());

// منع فتح أدوات المطورين
document.addEventListener("keydown", function (e) {
  // منع F12
  if (e.key === "F12") {
    e.preventDefault();
    alert("❌ أدوات المطورين معطلة!");
    return false;
  }

  // منع Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
    alert("❌ أدوات المطورين معطلة!");
    return false;
  }

  // منع Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && e.key === "J") {
    e.preventDefault();
    alert("❌ أدوات المطورين معطلة!");
    return false;
  }

  // منع Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && e.key === "C") {
    e.preventDefault();
    alert("❌ أدوات المطورين معطلة!");
    return false;
  }

  // منع Ctrl+U (عرض المصدر)
  if (e.ctrlKey && e.key === "U") {
    e.preventDefault();
    alert("❌ عرض المصدر غير مسموح!");
    return false;
  }
});

// نظام حماية من Screenshot
(() => {
  // منع أزرار Screenshot
  document.onkeydown = (e) => {
    if (
      e.key === "PrintScreen" ||
      e.keyCode === 44 ||
      (e.ctrlKey && e.shiftKey && e.key === "S") ||
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();

      // تأثير مرئي
      document.body.style.transition = "all 0.3s";
      document.body.style.filter = "blur(5px)";
      setTimeout(() => (document.body.style.filter = "blur(0)"), 500);

      // رسالة تحذير
      alert("🚫 التقاط الشاشة غير مسموح به في نظام الاختبارات");
      return false;
    }
  };

  // حماية إضافية
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.body.style.filter = "blur(10px)";
    }
  });

  // طبقة حماية شفافة
  const overlay = document.createElement("div");
  overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999999;
        pointer-events: none;
        background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,0,0,0.02) 10px,
            rgba(255,0,0,0.02) 20px
        );
        opacity: 0.3;
    `;
  document.body.appendChild(overlay);
})();
