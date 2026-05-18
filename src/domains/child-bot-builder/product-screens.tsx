"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  CheckCircle2,
  FileText,
  Folder,
  Globe2,
  X,
  Lock,
  MessageSquareText,
  Plus,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const uiCopy = {
  en: {
    goodAfternoon: "Good afternoon, Alex",
    workspaceOverview: "Workspace overview",
    newChannel: "New Channel",
    activeBots: "Active bots",
    allBots: "All bots",
    messagesResponded: "Messages responded",
    currentlyLive: "Currently live",
    liveAndReview: "Live and in review",
    acrossBots: "Across all bots",
    viewAll: "View all",
    channels: "Channels",
    connectedSurfaces: "Connected surfaces",
    managedChannels: "Managed channels",
    bot: "Bot",
    agent: "Agent",
    agentModel: "Agent model",
    channel: "Channel",
    status: "Status",
    messages: "Messages",
    lastActive: "Last active",
    action: "Action",
    open: "Open",
    openChannel: "Open channel",
    channelSetup: "Channel setup",
    steps: "Steps",
    chooseChannel: "Choose channel",
    configure: "Configure",
    webhook: "Webhook",
    test: "Test",
    configuration: "configuration",
    webhookVerification: "Webhook verification",
    testAndComplete: "Test and complete",
    channelName: "Channel name",
    channelType: "Channel type",
    providerModel: "Provider model",
    apiKey: "API key",
    clientApiKeyNumber: "Client API key number",
    businessAccountId: "Business account ID",
    webhookUrl: "Webhook URL",
    verificationToken: "Verification token",
    verifyWebhook: "Verify webhook",
    testNumber: "Test number",
    testNow: "Test now",
    readyComplete: "Configuration ready to complete.",
    back: "Back",
    next: "Next",
    completeSetup: "Complete setup",
    contacts: "Contacts",
    clientInbox: "Client inbox",
    allContacts: "All contacts",
    totalContacts: "Total contacts",
    client: "Client",
    viewChat: "View chat",
    backToContacts: "Back to contacts",
    analytics: "Analytics",
    channelsAgents: "Channels and agents",
    activeChannels: "Active channels",
    allChannels: "All channels",
    currentlyConnected: "Currently connected",
    acrossAgents: "Across all agents",
    channelFilter: "Channel filter",
    messagesByChannel: "Messages by channel",
    dailyMessageVolume: "Daily message volume split by selected channels.",
    agentPerformance: "Agent performance by channel",
    engine: "Engine",
    active: "Active",
    inactive: "Inactive",
    knowledge: "Knowledge",
    folders: "Folders",
    newFolder: "New folder",
    addResource: "Add resource",
    knowledgeFolder: "Knowledge folder",
    resources: "Resources",
    name: "Name",
    type: "Type",
    updated: "Updated",
    settings: "Settings",
    workspaceControls: "Workspace controls",
    workspace: "Workspace",
    access: "Access",
    overview: "Overview",
    knowledgeConnected: "Knowledge connected",
    selectKnowledge: "Select knowledge",
    selectKnowledgeDesc: "Connect one knowledge folder to this channel so answers can stay grounded in approved sources.",
    createNewKnowledge: "Create new knowledge",
    change: "Change",
    contactsInChannel: "Contacts in this channel",
    respondedByChannel: "Responded by this channel",
    dailyMessagesChannel: "Daily messages handled by this channel.",
    currentConversations: "Current conversations",
    channelConfiguration: "Channel configuration",
    configSafety: "Config safety",
    noContacts: "No contacts for this channel yet.",
    cancel: "Cancel",
    createFolder: "Create folder",
    folderName: "Folder name",
    close: "Close",
    uploadAsset: "Upload asset",
    addText: "Add text",
    dragAssets: "Drag and drop assets here",
    fileTypes: "PDF, DOCX, TXT, CSV, or images.",
    chooseFiles: "Choose files",
    textContent: "Text content",
    addResourceButton: "Add resource",
    total: "total",
    largestSource: "Largest source",
    allSelectedChannels: "All selected channels",
    selectedChannels: "selected channels",
    channelStatus: "Channel status",
    messagesByDay: "Messages by day",
    conversations: "Conversations",
    provider: "Provider",
    hostedWidget: "Hosted widget",
    metaCloud: "Meta Cloud",
    privateDataRule: "Block private data collection",
    lowConfidenceRule: "Escalate low confidence replies",
    approvedKnowledgeRule: "Require approved knowledge for factual answers",
    resourcesConnected: "resources connected to this channel",
    handledByChannel: "Handled by this channel",
    messageVolumeChannel: "message volume for this channel only.",
    items: "items",
    indexed: "Indexed",
    syncing: "Syncing",
    review: "Review",
    live: "Live",
    needsReview: "Needs review",
    aiHandled: "AI handled",
    escalated: "Escalated",
    textPlaceholder: "Paste or write the knowledge text here...",
    realEstatePlaceholder: "Real estate listings",
    dataRegion: "Data region",
    retention: "Retention",
    defaultReviewRole: "Default review role",
    owners: "Owners",
    admins: "Admins",
    reviewers: "Reviewers",
    viewers: "Viewers",
    now: "now",
    ago: "ago",
    second: "sec",
    seconds: "sec",
    minute: "min",
    minutes: "min",
    hour: "hr",
    hours: "hr",
    day: "day",
    days: "days",
    month: "mo",
    months: "mo",
    year: "yr",
    years: "yr",
    channelLabels: {
      WhatsApp: "WhatsApp",
      "Website chat": "Website chat",
      Telegram: "Telegram",
      Instagram: "Instagram",
      Messenger: "Messenger",
      "Parent portal": "Parent portal",
      "Classroom app": "Classroom app",
    },
  },
  ar: {
    goodAfternoon: "مساء الخير، أليكس",
    workspaceOverview: "نظرة عامة على مساحة العمل",
    newChannel: "قناة جديدة",
    activeBots: "الوكلاء النشطون",
    allBots: "كل الوكلاء",
    messagesResponded: "الرسائل التي تم الرد عليها",
    currentlyLive: "نشط الآن",
    liveAndReview: "نشط وقيد المراجعة",
    acrossBots: "عبر كل الوكلاء",
    viewAll: "عرض الكل",
    channels: "القنوات",
    connectedSurfaces: "الأسطح المتصلة",
    managedChannels: "القنوات المُدارة",
    bot: "الوكيل",
    agent: "الوكيل",
    agentModel: "نموذج الوكيل",
    channel: "القناة",
    status: "الحالة",
    messages: "الرسائل",
    lastActive: "آخر نشاط",
    action: "الإجراء",
    open: "فتح",
    openChannel: "فتح القناة",
    channelSetup: "إعداد القناة",
    steps: "الخطوات",
    chooseChannel: "اختر القناة",
    configure: "الإعداد",
    webhook: "ويب هوك",
    test: "اختبار",
    configuration: "الإعداد",
    webhookVerification: "التحقق من الويب هوك",
    testAndComplete: "الاختبار والإكمال",
    channelName: "اسم القناة",
    channelType: "نوع القناة",
    providerModel: "مزود القناة",
    apiKey: "مفتاح API",
    clientApiKeyNumber: "رقم مفتاح API للعميل",
    businessAccountId: "معرف حساب الأعمال",
    webhookUrl: "رابط الويب هوك",
    verificationToken: "رمز التحقق",
    verifyWebhook: "تحقق من الويب هوك",
    testNumber: "رقم الاختبار",
    testNow: "اختبر الآن",
    readyComplete: "الإعداد جاهز للإكمال.",
    back: "رجوع",
    next: "التالي",
    completeSetup: "إكمال الإعداد",
    contacts: "جهات الاتصال",
    clientInbox: "صندوق العملاء",
    allContacts: "كل جهات الاتصال",
    totalContacts: "إجمالي جهات الاتصال",
    client: "العميل",
    viewChat: "عرض الدردشة",
    backToContacts: "العودة إلى جهات الاتصال",
    analytics: "التحليلات",
    channelsAgents: "القنوات والوكلاء",
    activeChannels: "القنوات النشطة",
    allChannels: "كل القنوات",
    currentlyConnected: "متصلة الآن",
    acrossAgents: "عبر كل الوكلاء",
    channelFilter: "تصفية القنوات",
    messagesByChannel: "الرسائل حسب القناة",
    dailyMessageVolume: "حجم الرسائل اليومي حسب القنوات المحددة.",
    agentPerformance: "أداء الوكلاء حسب القناة",
    engine: "المحرك",
    active: "نشط",
    inactive: "غير نشط",
    knowledge: "المعرفة",
    folders: "المجلدات",
    newFolder: "مجلد جديد",
    addResource: "إضافة مصدر",
    knowledgeFolder: "مجلد المعرفة",
    resources: "المصادر",
    name: "الاسم",
    type: "النوع",
    updated: "آخر تحديث",
    settings: "الإعدادات",
    workspaceControls: "تحكم مساحة العمل",
    workspace: "مساحة العمل",
    access: "الصلاحيات",
    overview: "نظرة عامة",
    knowledgeConnected: "المعرفة المتصلة",
    selectKnowledge: "اختيار المعرفة",
    selectKnowledgeDesc: "اربط مجلد معرفة واحد بهذه القناة حتى تبقى الردود مبنية على مصادر معتمدة.",
    createNewKnowledge: "إنشاء معرفة جديدة",
    change: "تغيير",
    contactsInChannel: "جهات الاتصال في هذه القناة",
    respondedByChannel: "تم الرد من هذه القناة",
    dailyMessagesChannel: "الرسائل اليومية التي تعاملت معها هذه القناة.",
    currentConversations: "المحادثات الحالية",
    channelConfiguration: "إعداد القناة",
    configSafety: "أمان الإعداد",
    noContacts: "لا توجد جهات اتصال لهذه القناة بعد.",
    cancel: "إلغاء",
    createFolder: "إنشاء مجلد",
    folderName: "اسم المجلد",
    close: "إغلاق",
    uploadAsset: "رفع ملف",
    addText: "إضافة نص",
    dragAssets: "اسحب الملفات وأفلتها هنا",
    fileTypes: "PDF أو DOCX أو TXT أو CSV أو صور.",
    chooseFiles: "اختيار الملفات",
    textContent: "محتوى النص",
    addResourceButton: "إضافة المصدر",
    total: "الإجمالي",
    largestSource: "أكبر مصدر",
    allSelectedChannels: "كل القنوات المحددة",
    selectedChannels: "قنوات محددة",
    channelStatus: "حالة القناة",
    messagesByDay: "الرسائل حسب اليوم",
    conversations: "المحادثات",
    provider: "المزود",
    hostedWidget: "ودجت مستضاف",
    metaCloud: "Meta Cloud",
    privateDataRule: "منع جمع البيانات الخاصة",
    lowConfidenceRule: "تصعيد الردود منخفضة الثقة",
    approvedKnowledgeRule: "اشتراط معرفة معتمدة للإجابات الواقعية",
    resourcesConnected: "مصادر مرتبطة بهذه القناة",
    handledByChannel: "تم التعامل معها عبر هذه القناة",
    messageVolumeChannel: "حجم الرسائل لهذه القناة فقط.",
    items: "عناصر",
    indexed: "مفهرس",
    syncing: "قيد المزامنة",
    review: "مراجعة",
    live: "نشط",
    needsReview: "يحتاج مراجعة",
    aiHandled: "الذكاء رد",
    escalated: "تم التصعيد",
    textPlaceholder: "الصق أو اكتب نص المعرفة هنا...",
    realEstatePlaceholder: "قوائم العقارات",
    dataRegion: "منطقة البيانات",
    retention: "الاحتفاظ",
    defaultReviewRole: "دور المراجعة الافتراضي",
    owners: "الملاك",
    admins: "المشرفون",
    reviewers: "المراجعون",
    viewers: "المشاهدون",
    now: "الآن",
    ago: "منذ",
    second: "ثانية",
    seconds: "ثواني",
    minute: "دقيقة",
    minutes: "دقائق",
    hour: "ساعة",
    hours: "ساعات",
    day: "يوم",
    days: "أيام",
    month: "شهر",
    months: "أشهر",
    year: "سنة",
    years: "سنوات",
    channelLabels: {
      WhatsApp: "واتساب",
      "Website chat": "دردشة الموقع",
      Telegram: "تيليجرام",
      Instagram: "إنستغرام",
      Messenger: "ماسنجر",
      "Parent portal": "بوابة الوالدين",
      "Classroom app": "تطبيق الفصل",
    },
  },
} as const;

function useCopy() {
  return uiCopy[useLocale() === "ar" ? "ar" : "en"];
}

function useLocaleKey() {
  return useLocale() === "ar" ? "ar" : "en";
}

function channelLabel(value: string, copy: ReturnType<typeof useCopy>) {
  return copy.channelLabels[value as keyof typeof copy.channelLabels] ?? value;
}

function formatRelativeTime(value: string, copy: ReturnType<typeof useCopy>, locale: "en" | "ar") {
  const normalized = value.trim().toLowerCase();

  if (normalized === "now") return copy.now;
  if (normalized === "yesterday") return locale === "ar" ? `${copy.ago} 1 ${copy.day}` : `1 ${copy.day} ${copy.ago}`;

  const match = normalized.match(/^(\d+)\s*(sec|second|seconds|min|minute|minutes|hr|hour|hours|day|days|mo|month|months|yr|year|years)\s*ago$/);
  if (!match) return value;

  const amount = Number(match[1]);
  const unit = match[2];
  const unitKey =
    unit.startsWith("sec") ? (amount === 1 ? "second" : "seconds")
    : unit.startsWith("min") ? (amount === 1 ? "minute" : "minutes")
    : unit.startsWith("hr") || unit.startsWith("hour") ? (amount === 1 ? "hour" : "hours")
    : unit.startsWith("day") ? (amount === 1 ? "day" : "days")
    : unit.startsWith("mo") || unit.startsWith("month") ? (amount === 1 ? "month" : "months")
    : amount === 1 ? "year" : "years";
  const unitLabel = copy[unitKey];

  return locale === "ar" ? `${copy.ago} ${amount} ${unitLabel}` : `${amount} ${unitLabel} ${copy.ago}`;
}

const arabicDemoText: Record<string, string> = {
  "Can I tell you my address so you know where my school is?": "هل يمكنني إخبارك بعنواني حتى تعرف أين مدرستي؟",
  "I cannot collect your address. You can ask a parent or teacher to help share school details safely.": "لا يمكنني جمع عنوانك. يمكنك طلب مساعدة أحد الوالدين أو المعلم لمشاركة تفاصيل المدرسة بأمان.",
  "Ok, can you still help with the reading worksheet?": "حسنًا، هل يمكنك مساعدتي في ورقة القراءة؟",
  "Yes. Share the question without private details, and I can help you think through it.": "نعم. شارك السؤال بدون تفاصيل خاصة، وسأساعدك على التفكير فيه.",
  "What do I need for the science project tomorrow?": "ماذا أحتاج لمشروع العلوم غدًا؟",
  "Bring your observation sheet, pencil, and the plant sample your teacher approved.": "أحضر ورقة الملاحظات والقلم وعينة النبات التي وافق عليها المعلم.",
  "Can I bring photos too?": "هل يمكنني إحضار صور أيضًا؟",
  "Yes, photos are helpful if your teacher asked for them.": "نعم، الصور مفيدة إذا طلبها المعلم.",
  "Can the villain get really hurt at the end?": "هل يمكن أن يتأذى الشرير بشدة في النهاية؟",
  "Let's keep the ending safe. The villain can learn a lesson, apologize, or lose their power instead.": "لنجعل النهاية آمنة. يمكن للشرير أن يتعلم درسًا أو يعتذر أو يفقد قوته بدلًا من ذلك.",
  "What if they fall in a trap?": "ماذا لو وقع في فخ؟",
  "A funny harmless trap can work, like getting covered in feathers or stuck in bubble gum.": "يمكن استخدام فخ مضحك وغير مؤذٍ، مثل أن يتغطى بالريش أو يعلق في علكة.",
  "Personal information": "معلومات شخصية",
  "Routine question": "سؤال روتيني",
  "Violence boundary": "حدود العنف",
};

function demoText(value: string, locale: "en" | "ar") {
  return locale === "ar" ? arabicDemoText[value] ?? value : value;
}

const bots = [
  {
    id: "homework-helper",
    name: "Homework Helper",
    role: "Guides math and reading practice",
    age: "Ages 8-11",
    status: "Live",
    safety: "98%",
    updated: "12 min ago",
    knowledge: "24 sources",
    model: "GPT-4.1 mini",
    channel: "Website chat",
    channelType: "Website chat",
    messages: "642",
    knowledgeBaseId: "school-help",
  },
  {
    id: "story-coach",
    name: "Story Coach",
    role: "Helps draft age-safe stories",
    age: "Ages 6-9",
    status: "Review",
    safety: "94%",
    updated: "42 min ago",
    knowledge: "18 sources",
    model: "GPT-4.1",
    channel: "Parent portal",
    channelType: "Messenger",
    messages: "318",
    knowledgeBaseId: "",
  },
  {
    id: "classroom-guide",
    name: "Classroom Guide",
    role: "Answers classroom routines",
    age: "Grade 5",
    status: "Live",
    safety: "99%",
    updated: "1 hr ago",
    knowledge: "31 sources",
    model: "GPT-4.1 mini",
    channel: "Classroom app",
    channelType: "Website chat",
    messages: "324",
    knowledgeBaseId: "school-help",
  },
];

const channelAnalytics = [
  {
    id: "website",
    name: "Website chat",
    bot: "Homework Helper",
    engine: "GPT-4.1 mini",
    active: true,
    color: "#2563EB",
    messages: 642,
  },
  {
    id: "portal",
    name: "Parent portal",
    bot: "Story Coach",
    engine: "GPT-4.1",
    active: false,
    color: "#0F766E",
    messages: 318,
  },
  {
    id: "classroom",
    name: "Classroom app",
    bot: "Classroom Guide",
    engine: "GPT-4.1 mini",
    active: true,
    color: "#EA580C",
    messages: 324,
  },
];

const analyticsSeries = [
  { label: "Mon", website: 78, portal: 42, classroom: 38 },
  { label: "Tue", website: 96, portal: 48, classroom: 44 },
  { label: "Wed", website: 88, portal: 53, classroom: 52 },
  { label: "Thu", website: 114, portal: 59, classroom: 61 },
  { label: "Fri", website: 126, portal: 65, classroom: 58 },
  { label: "Sat", website: 82, portal: 38, classroom: 34 },
  { label: "Sun", website: 58, portal: 13, classroom: 37 },
];

const workspaceTabs = [
  ["Overview", "overview"],
  ["Configure", "configure"],
  ["Knowledge", "knowledge"],
  ["Contacts", "contacts"],
] as const;

const conversations = [
  {
    id: "conv-1",
    client: "Maya Johnson",
    childProfile: "Ages 8-11",
    channel: "Website chat",
    channelIcon: Globe2,
    bot: "Homework Helper",
    status: "Needs review",
    lastMessage: "Can I tell you my address so you know where my school is?",
    lastActive: "2 min ago",
    issue: "Personal information",
    confidence: "High",
    messages: [
      ["child", "Can I tell you my address so you know where my school is?"],
      ["bot", "I cannot collect your address. You can ask a parent or teacher to help share school details safely."],
      ["child", "Ok, can you still help with the reading worksheet?"],
      ["bot", "Yes. Share the question without private details, and I can help you think through it."],
    ],
    transitions: ["Message received", "Policy matched", "Safe reply sent", "Waiting for adult review"],
  },
  {
    id: "conv-2",
    client: "Noah Carter",
    childProfile: "Grade 5",
    channel: "Classroom app",
    channelIcon: MessageSquareText,
    bot: "Classroom Guide",
    status: "AI handled",
    lastMessage: "What do I need for the science project tomorrow?",
    lastActive: "9 min ago",
    issue: "Routine question",
    confidence: "High",
    messages: [
      ["child", "What do I need for the science project tomorrow?"],
      ["bot", "Bring your observation sheet, pencil, and the plant sample your teacher approved."],
      ["child", "Can I bring photos too?"],
      ["bot", "Yes, photos are helpful if your teacher asked for them."],
    ],
    transitions: ["Message received", "Knowledge source found", "AI answered", "Resolved"],
  },
  {
    id: "conv-3",
    client: "Ava Smith",
    childProfile: "Ages 6-9",
    channel: "Instagram",
    channelIcon: MessageSquareText,
    bot: "Story Coach",
    status: "Escalated",
    lastMessage: "Can the villain get really hurt at the end?",
    lastActive: "18 min ago",
    issue: "Violence boundary",
    confidence: "Medium",
    messages: [
      ["child", "Can the villain get really hurt at the end?"],
      ["bot", "Let's keep the ending safe. The villain can learn a lesson, apologize, or lose their power instead."],
      ["child", "What if they fall in a trap?"],
      ["bot", "A funny harmless trap can work, like getting covered in feathers or stuck in bubble gum."],
    ],
    transitions: ["Message received", "Boundary detected", "Safe alternative suggested", "Escalated for review"],
  },
] as const;

const knowledgeBases = [
  {
    id: "real-estate",
    name: "Real estate listings",
    description: "Apartment facts, pricing rules, neighborhood notes, and handoff scripts.",
    channels: ["Website chat", "Parent portal"],
    resources: [
      { name: "Apartment inventory.pdf", type: "PDF", status: "Indexed", updated: "12 min ago" },
      { name: "Pricing answers", type: "Prompt", status: "Indexed", updated: "1 hr ago" },
      { name: "Neighborhood guide.url", type: "URL", status: "Syncing", updated: "Now" },
    ],
  },
  {
    id: "school-help",
    name: "School helper",
    description: "Class routines, homework boundaries, approved lesson files, and escalation copy.",
    channels: ["Classroom app"],
    resources: [
      { name: "Grade 5 reading pack.pdf", type: "PDF", status: "Indexed", updated: "Yesterday" },
      { name: "Math practice rules.md", type: "Text", status: "Indexed", updated: "2 days ago" },
      { name: "Classroom routines.url", type: "URL", status: "Indexed", updated: "3 days ago" },
    ],
  },
  {
    id: "story-safety",
    name: "Story safety",
    description: "Creative writing constraints, safe endings, blocked topics, and review notes.",
    channels: ["Instagram", "Website chat"],
    resources: [
      { name: "Safe story endings.txt", type: "Text", status: "Indexed", updated: "4 hr ago" },
      { name: "Blocked themes", type: "Prompt", status: "Indexed", updated: "Yesterday" },
    ],
  },
] as const;

export function HomeScreen() {
  const copy = useCopy();
  const activeBots = bots.filter((bot) => bot.status === "Live");

  return (
    <Page title={copy.goodAfternoon} eyebrow={copy.workspaceOverview} action={copy.newChannel} href="/channels/new">
      <div className="grid gap-4 lg:grid-cols-3">
        <MetricCard label={copy.activeBots} value={String(activeBots.length)} detail={copy.currentlyLive} icon={Bot} />
        <MetricCard label={copy.allBots} value={String(bots.length)} detail={copy.liveAndReview} icon={Bot} />
        <MetricCard label={copy.messagesResponded} value="1,284" detail={copy.acrossBots} icon={MessageSquareText} />
      </div>

      <Panel title={copy.activeBots} action={<LinkAction href="/channels">{copy.viewAll}</LinkAction>}>
        <div className="space-y-3">
          {activeBots.map((bot) => (
            <BotRow key={bot.id} bot={bot} />
          ))}
        </div>
      </Panel>
    </Page>
  );
}

export function BotsScreen() {
  const copy = useCopy();

  return (
    <Page title={copy.channels} eyebrow={copy.connectedSurfaces} action={copy.newChannel} href="/channels/new">
      <Panel title={copy.managedChannels}>
        <div className="overflow-hidden rounded-xl border border-[#E2E8F0] dark:border-white/10">
          <div className="hidden grid-cols-[minmax(220px,1.4fr)_160px_160px_110px_120px_130px_80px] border-b border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 lg:grid">
            <span>{copy.bot}</span>
            <span>{copy.agentModel}</span>
            <span>{copy.channel}</span>
            <span>{copy.status}</span>
            <span>{copy.messages}</span>
            <span>{copy.lastActive}</span>
            <span className="text-right">{copy.action}</span>
          </div>
          <div className="divide-y divide-[#E2E8F0] dark:divide-white/10">
            {bots.map((bot) => (
              <BotTableRow key={bot.id} bot={bot} />
            ))}
          </div>
        </div>
      </Panel>
    </Page>
  );
}

export function CreateBotScreen() {
  const copy = useCopy();
  const locale = useLocaleKey();
  const [step, setStep] = useState(1);
  const [channelType, setChannelType] = useState("WhatsApp");
  const channelTypes = ["WhatsApp", "Website chat", "Telegram", "Instagram", "Messenger"];
  const providerOptions: Record<string, string[]> = {
    WhatsApp: ["WhatsApp Meta Cloud", "Twilio WhatsApp", "360dialog"],
    "Website chat": ["Hosted widget", "Custom embed", "SDK install"],
    Telegram: ["Telegram Bot API"],
    Instagram: ["Meta Instagram Messaging"],
    Messenger: ["Meta Messenger Platform"],
  };

  return (
    <Page title={copy.newChannel} eyebrow={copy.channelSetup}>
      <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
        <Panel title={copy.steps} compact>
          {[copy.chooseChannel, copy.configure, copy.webhook, copy.test].map((label, index) => {
            const current = index + 1;

            return (
              <button
                key={label}
                type="button"
                onClick={() => setStep(current)}
                className={cn(
                  "mb-2 flex w-full items-center gap-3 rounded-xl p-3 text-left transition",
                  step === current ? "bg-[#DBEAFE] dark:bg-white/10 text-[#0F172A] dark:text-slate-100" : "text-slate-600 dark:text-slate-300 hover:bg-[#F8FAFC] dark:hover:bg-white/5",
                )}
              >
                <span className={cn("flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold", step === current ? "bg-[#2563EB] text-white" : "bg-[#F8FAFC] dark:bg-black text-slate-500 dark:text-slate-400")}>
                  {current}
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </button>
            );
          })}
        </Panel>

        <Panel title={step === 1 ? copy.chooseChannel : step === 2 ? `${channelLabel(channelType, copy)} ${copy.configuration}` : step === 3 ? copy.webhookVerification : copy.testAndComplete}>
          {step === 1 && (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {channelTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setChannelType(type)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition",
                    channelType === type ? "border-[#2563EB] bg-[#DBEAFE] dark:bg-white/10" : "border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 hover:bg-[#F8FAFC] dark:hover:bg-white/5",
                  )}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-zinc-950 text-[#2563EB] ring-1 ring-[#E2E8F0] dark:ring-white/10">
                    <MessageSquareText className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold text-[#0F172A] dark:text-slate-100">{type}</p>
                  {locale === "ar" && <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{channelLabel(type, copy)}</p>}
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-4 md:grid-cols-2">
              <Field label={copy.channelName} placeholder={`${channelLabel(channelType, copy)} ${copy.channel}`} />
              <SelectField label={copy.channelType} value={channelType} options={channelTypes} onChange={setChannelType} getOptionLabel={(option) => channelLabel(option, copy)} />
              <SelectField label={copy.providerModel} value={providerOptions[channelType][0]} options={providerOptions[channelType]} />
              <Field label={copy.apiKey} placeholder={channelType === "WhatsApp" ? "Meta Cloud API key" : "Provider API key"} />
              <Field label={copy.clientApiKeyNumber} placeholder="Client key / phone number / account id" />
              <Field label={copy.businessAccountId} placeholder="Optional provider account id" />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black p-4">
                <p className="text-sm font-semibold text-[#0F172A] dark:text-slate-100">{copy.webhookUrl}</p>
                <p className="mt-2 break-all rounded-lg bg-white dark:bg-zinc-950 p-3 font-mono text-xs text-slate-600 dark:text-slate-300 ring-1 ring-[#E2E8F0] dark:ring-white/10">
                  https://api.childbotbuilder.com/webhooks/{channelType.toLowerCase().replace(/\s+/g, "-")}
                </p>
              </div>
              <Field label={copy.verificationToken} placeholder={copy.verificationToken} />
              <Button variant="outline" className="border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 text-[#2563EB] hover:bg-[#F8FAFC] dark:hover:bg-white/5">{copy.verifyWebhook}</Button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <Field label={copy.testNumber} placeholder="+1 555 0100" />
              <Button variant="outline" className="border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 text-[#2563EB] hover:bg-[#F8FAFC] dark:hover:bg-white/5">{copy.testNow}</Button>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
                {copy.readyComplete}
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-end gap-2 border-t border-[#E2E8F0] dark:border-white/10 pt-5">
            <Button variant="outline" className="border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950" onClick={() => setStep(Math.max(1, step - 1))}>{copy.back}</Button>
            <Button className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]" onClick={() => setStep(Math.min(4, step + 1))}>
              {step === 4 ? copy.completeSetup : copy.next}
            </Button>
          </div>
        </Panel>
      </div>
    </Page>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{label}</span>
      <input className="mt-2 h-11 w-full rounded-lg border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 px-3 text-sm text-[#0F172A] dark:text-slate-100 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE] dark:focus:ring-white/10" placeholder={placeholder} />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
  getOptionLabel = (option) => option,
}: {
  label: string;
  value: string;
  options: string[];
  onChange?: (value: string) => void;
  getOptionLabel?: (value: string) => string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="mt-2 h-11 w-full rounded-lg border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 px-3 text-sm font-semibold text-[#0F172A] dark:text-slate-100 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE] dark:focus:ring-white/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {getOptionLabel(option)}
          </option>
        ))}
      </select>
    </label>
  );
}
export function ConversationsScreen() {
  const copy = useCopy();
  const locale = useLocaleKey();
  const handledCount = conversations.filter((conversation) => conversation.status === "AI handled").length;
  const reviewCount = conversations.filter((conversation) => conversation.status === "Needs review").length;

  return (
    <Page title={copy.contacts} eyebrow={copy.clientInbox}>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label={copy.totalContacts} value={String(conversations.length)} detail={copy.allContacts} icon={MessageSquareText} />
        <MetricCard label={copy.aiHandled} value={String(handledCount)} detail={copy.respondedByChannel} icon={CheckCircle2} />
        <MetricCard label={copy.needsReview} value={String(reviewCount)} detail={copy.currentlyConnected} icon={Bot} />
      </div>

      <Panel
        title={copy.allContacts}
        action={
          <div className="hidden items-center gap-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-1 dark:border-white/10 dark:bg-black sm:flex">
            {[copy.allContacts, copy.aiHandled, copy.needsReview].map((label, index) => (
              <button
                key={label}
                type="button"
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-semibold transition",
                  index === 0
                    ? "bg-white text-[#0F172A] shadow-sm dark:bg-zinc-950 dark:text-slate-100"
                    : "text-slate-500 hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        }
        compact
      >
        <div className="overflow-hidden rounded-xl border border-[#E2E8F0] dark:border-white/10">
          <div className="hidden grid-cols-[minmax(260px,1.5fr)_180px_180px_150px_96px] border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:border-white/10 dark:bg-black dark:text-slate-500 lg:grid">
            <span>{copy.client}</span>
            <span>{copy.channel}</span>
            <span>{copy.agent}</span>
            <span>{copy.lastActive}</span>
            <span className="text-right">{copy.action}</span>
          </div>
          <div className="divide-y divide-[#E2E8F0] dark:divide-white/10">
            {conversations.map((conversation) => {
              const ConversationIcon = conversation.channelIcon;

              return (
                <Link
                  key={conversation.id}
                  href={`/conversations/${conversation.id}`}
                  className="grid gap-4 bg-white px-4 py-4 transition hover:bg-[#F8FAFC] dark:bg-zinc-950 dark:hover:bg-white/5 lg:grid-cols-[minmax(260px,1.5fr)_180px_180px_150px_96px] lg:items-center"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F8FAFC] text-sm font-bold text-[#0F172A] ring-1 ring-[#E2E8F0] dark:bg-black dark:text-slate-100 dark:ring-white/10">
                      {conversation.client.charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-sm font-semibold text-[#0F172A] dark:text-slate-100">{conversation.client}</span>
                        <ConversationStatus status={conversation.status} />
                      </span>
                      <span className="mt-1 block truncate text-xs text-slate-500 dark:text-slate-400">{demoText(conversation.lastMessage, locale)}</span>
                    </span>
                  </span>
                  <span className="flex items-center justify-between gap-4 text-sm lg:block">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 lg:hidden">{copy.channel}</span>
                    <span className="flex items-center gap-2 font-medium text-slate-600 dark:text-slate-300">
                      <ConversationIcon className="h-4 w-4 text-[#2563EB]" />
                      <span className="truncate">{channelLabel(conversation.channel, copy)}</span>
                    </span>
                  </span>
                  <TableMeta label={copy.agent} value={conversation.bot} />
                  <TableMeta label={copy.lastActive} value={formatRelativeTime(conversation.lastActive, copy, locale)} />
                  <span className="inline-flex items-center justify-between text-sm font-semibold text-[#2563EB] lg:justify-end">
                    <span className="lg:hidden">{copy.viewChat}</span>
                    <span className="hidden lg:inline">{copy.open}</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Panel>
    </Page>
  );
}

export function ConversationDetailScreen() {
  const copy = useCopy();
  const locale = useLocaleKey();
  const pathname = usePathname();
  const conversationId = pathname.split("/").filter(Boolean).at(-1);
  const conversation = conversations.find((item) => item.id === conversationId) ?? conversations[0];
  const ChannelIcon = conversation.channelIcon;

  return (
    <div className="flex h-full min-h-full flex-col bg-[#F8FAFC] dark:bg-black">
      <div className="flex min-h-20 items-center justify-between gap-4 border-b border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <Link href="/conversations" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#2563EB] transition hover:bg-[#F8FAFC] dark:hover:bg-white/5">
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span className="sr-only">{copy.backToContacts}</span>
          </Link>
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DBEAFE] dark:bg-white/10 text-[#2563EB]">
              <ChannelIcon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-[#0F172A] dark:text-slate-100">{conversation.client}</p>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                <span>{channelLabel(conversation.channel, copy)}</span>
                <span className="hidden sm:inline">·</span>
                <span>{conversation.bot}</span>
                <span className="hidden sm:inline">·</span>
                <span>{formatRelativeTime(conversation.lastActive, copy, locale)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-full bg-[#F8FAFC] dark:bg-black px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">{demoText(conversation.issue, locale)}</span>
          <ConversationStatus status={conversation.status} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {conversation.messages.map(([side, text], index) => (
            <ChatBubble key={`${conversation.id}-detail-${index}`} side={side} text={demoText(text, locale)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AnalyticsScreen() {
  const copy = useCopy();
  const [selectedChannelIds, setSelectedChannelIds] = useState<string[]>(channelAnalytics.map((channel) => channel.id));
  const selectedChannels = useMemo(
    () => channelAnalytics.filter((channel) => selectedChannelIds.includes(channel.id)),
    [selectedChannelIds],
  );
  const activeChannels = channelAnalytics.filter((channel) => channel.active);

  function toggleChannel(channelId: string) {
    setSelectedChannelIds((current) => {
      if (current.includes(channelId)) {
        const next = current.filter((id) => id !== channelId);
        return next.length > 0 ? next : current;
      }

      return [...current, channelId];
    });
  }

  return (
    <Page title={copy.analytics} eyebrow={copy.channelsAgents}>
      <div className="grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="grid gap-4">
          <AnalyticsStatusCard label={copy.activeChannels} value={String(activeChannels.length)} detail={copy.currentlyConnected} icon={BarChart3} />
          <AnalyticsStatusCard label={copy.allChannels} value={String(channelAnalytics.length)} detail={copy.acrossAgents} icon={MessageSquareText} />
        </div>
        <MessageShareDonut channels={selectedChannels} />
      </div>

      <Panel title={copy.channelFilter}>
        <div className="flex flex-wrap gap-2">
          {channelAnalytics.map((channel) => {
            const isSelected = selectedChannelIds.includes(channel.id);

            return (
              <button
                key={channel.id}
                type="button"
                onClick={() => toggleChannel(channel.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold transition",
                  isSelected ? "border-[#2563EB] bg-[#DBEAFE] dark:bg-white/10 text-[#0F172A] dark:text-slate-100" : "border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 text-slate-500 dark:text-slate-400 hover:bg-[#F8FAFC] dark:hover:bg-white/5",
                )}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: channel.color }} />
                {channelLabel(channel.name, copy)}
              </button>
            );
          })}
        </div>
      </Panel>

      <AnalyticsChartCard
        title={copy.messagesByChannel}
        description={copy.dailyMessageVolume}
        data={analyticsSeries}
        channels={selectedChannels}
      />

      <Panel title={copy.agentPerformance}>
        <div className="overflow-hidden rounded-xl border border-[#E2E8F0] dark:border-white/10">
          <div className="hidden grid-cols-[minmax(180px,1fr)_160px_160px_120px_110px] border-b border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 lg:grid">
            <span>{copy.agent}</span>
            <span>{copy.channel}</span>
            <span>{copy.engine}</span>
            <span>{copy.messages}</span>
            <span>{copy.status}</span>
          </div>
          <div className="divide-y divide-[#E2E8F0] dark:divide-white/10">
            {channelAnalytics.map((channel) => (
              <div key={channel.id} className="grid gap-3 bg-white dark:bg-zinc-950 px-4 py-4 lg:grid-cols-[minmax(180px,1fr)_160px_160px_120px_110px] lg:items-center lg:gap-0">
                <TableMeta label={copy.agent} value={channel.bot} />
                <span className="flex items-center justify-between gap-4 text-sm lg:block">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 lg:hidden">{copy.channel}</span>
                  <span className="inline-flex items-center gap-2 font-medium text-[#0F172A] dark:text-slate-100">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: channel.color }} />
                    {channelLabel(channel.name, copy)}
                  </span>
                </span>
                <TableMeta label={copy.engine} value={channel.engine} />
                <TableMeta label={copy.messages} value={channel.messages.toLocaleString()} />
                <span className={cn("w-fit rounded-full px-2.5 py-1 text-xs font-semibold", channel.active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300")}>
                  {channel.active ? copy.active : copy.inactive}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </Page>
  );
}

export function KnowledgeScreen() {
  const copy = useCopy();
  const [isNewFolderOpen, setIsNewFolderOpen] = useState(false);

  return (
    <Page title={copy.knowledge} eyebrow={copy.folders}>
      <div className="-mt-2 flex justify-end">
        <Button className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]" onClick={() => setIsNewFolderOpen(true)}>
          <Plus className="h-4 w-4" />
          {copy.newFolder}
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {knowledgeBases.map((base) => (
          <Link
            key={base.id}
            href={`/knowledge/${base.id}`}
            className="group rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 p-4 transition hover:border-[#CBD5E1] hover:bg-[#F8FAFC] dark:hover:bg-white/5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#DBEAFE] dark:bg-white/10 text-[#2563EB]">
                <Folder className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#0F172A] dark:text-slate-100">{base.name}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{base.resources.length} {copy.items}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <NewFolderModal open={isNewFolderOpen} onClose={() => setIsNewFolderOpen(false)} />
    </Page>
  );
}

export function KnowledgeBaseScreen() {
  const copy = useCopy();
  const locale = useLocaleKey();
  const pathname = usePathname();
  const baseId = pathname.split("/").filter(Boolean).at(-1);
  const base = knowledgeBases.find((item) => item.id === baseId) ?? knowledgeBases[0];
  const [isAddResourceOpen, setIsAddResourceOpen] = useState(false);

  return (
    <Page title={base.name} eyebrow={copy.knowledgeFolder}>
      <div className="-mt-2 flex justify-end">
        <Button className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]" onClick={() => setIsAddResourceOpen(true)}>
          <Plus className="h-4 w-4" />
          {copy.addResource}
        </Button>
      </div>
      <Panel title={copy.resources}>
        <div className="mb-4">
          <Link href="/knowledge" className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
            <ArrowRight className="h-4 w-4 rotate-180" />
            {copy.knowledge}
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#E2E8F0] dark:border-white/10">
          <div className="hidden grid-cols-[minmax(220px,1fr)_120px_120px_140px] border-b border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 lg:grid">
            <span>{copy.name}</span>
            <span>{copy.type}</span>
            <span>{copy.status}</span>
            <span>{copy.updated}</span>
          </div>
          <div className="divide-y divide-[#E2E8F0] dark:divide-white/10">
            {base.resources.map((resource) => (
              <div key={resource.name} className="grid gap-3 bg-white dark:bg-zinc-950 px-4 py-4 lg:grid-cols-[minmax(220px,1fr)_120px_120px_140px] lg:items-center lg:gap-0">
                <span className="flex min-w-0 items-center gap-3">
                  <FileText className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" />
                  <span className="truncate text-sm font-semibold text-[#0F172A] dark:text-slate-100">{resource.name}</span>
                </span>
                <TableMeta label={copy.type} value={resource.type} />
                <span className={cn("w-fit rounded-full px-2.5 py-1 text-xs font-semibold", resource.status === "Indexed" ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-[#2563EB]")}>
                  {resource.status === "Indexed" ? copy.indexed : copy.syncing}
                </span>
                <TableMeta label={copy.updated} value={formatRelativeTime(resource.updated, copy, locale)} />
              </div>
            ))}
          </div>
        </div>
      </Panel>
      <AddResourceModal open={isAddResourceOpen} onClose={() => setIsAddResourceOpen(false)} />
    </Page>
  );
}

export function SettingsScreen({ title = "Settings" }: { title?: string }) {
  const copy = useCopy();

  return (
    <Page title={title === "Settings" ? copy.settings : title} eyebrow={copy.workspaceControls}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title={copy.workspace}>
          <FormGrid items={[[copy.name, "Little Builders"], [copy.dataRegion, "US"], [copy.retention, "180 days"], [copy.defaultReviewRole, "Admin"]]} />
        </Panel>
        <Panel title={copy.access}>
          <FormGrid items={[[copy.owners, "1"], [copy.admins, "3"], [copy.reviewers, "5"], [copy.viewers, "8"]]} />
        </Panel>
      </div>
    </Page>
  );
}

export function BotWorkspaceScreen({ tab = "overview" }: { tab?: string }) {
  const copy = useCopy();
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const botId = parts[parts.indexOf("channels") + 1] || parts[parts.indexOf("bots") + 1] || "homework-helper";
  const bot = bots.find((item) => item.id === botId) ?? bots[0];
  const activeTab = workspaceTabs.find(([, value]) => value === tab)?.[1] ?? "overview";
  const tabLabels = {
    overview: copy.overview,
    configure: copy.configure,
    knowledge: copy.knowledge,
    contacts: copy.contacts,
  };

  return (
    <Page title={bot.name} wide>
      <div className="mb-6 overflow-x-auto border-b border-[#E2E8F0] dark:border-white/10">
        <div className="flex min-w-max gap-6">
          {workspaceTabs.map(([, value]) => (
            <Link
              key={value}
              href={`/channels/${bot.id}/${value}`}
              className={cn(
                "border-b-2 px-1 pb-3 text-sm font-semibold transition",
                activeTab === value ? "border-[#2563EB] text-[#0F172A] dark:text-slate-100" : "border-transparent text-slate-500 dark:text-slate-400 hover:text-[#0F172A] dark:text-slate-100",
              )}
            >
              {tabLabels[value]}
            </Link>
          ))}
        </div>
      </div>
      <BotTab tab={activeTab} bot={bot} />
    </Page>
  );
}

function BotTab({ tab, bot }: { tab: string; bot: (typeof bots)[number] }) {
  const copy = useCopy();

  if (tab === "configure") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Panel title={copy.channelConfiguration}>
          <FormGrid items={[[copy.channelName, channelLabel(bot.channel, copy)], [copy.channelType, channelLabel(bot.channelType, copy)], [copy.agentModel, bot.model], [copy.provider, bot.channelType === "Website chat" ? copy.hostedWidget : copy.metaCloud]]} />
        </Panel>
        <Panel title={copy.configSafety}>
          {[copy.privateDataRule, copy.lowConfidenceRule, copy.approvedKnowledgeRule].map((rule) => (
            <Rule key={rule}>{rule}</Rule>
          ))}
        </Panel>
      </div>
    );
  }

  if (tab === "knowledge") return <ChannelKnowledgeTab bot={bot} />;
  if (tab === "contacts") return <ChannelContactsTab bot={bot} />;
  if (tab === "analytics") return <ChannelAnalyticsTab bot={bot} />;

  const channelConversations = conversations.filter((conversation) => conversation.bot === bot.name || conversation.channel === bot.channel);
  const analyticsChannel = channelAnalytics.find((channel) => channel.bot === bot.name) ?? channelAnalytics[0];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        <MetricCard label={copy.conversations} value={String(channelConversations.length)} detail={copy.contactsInChannel} icon={MessageSquareText} />
        <MetricCard label={copy.messages} value={bot.messages} detail={copy.respondedByChannel} icon={BarChart3} />
        <MetricCard label={copy.status} value={bot.status === "Live" ? copy.live : copy.review} detail={channelLabel(bot.channelType, copy)} icon={Bot} />
      </div>

      <AnalyticsChartCard
        title={copy.messages}
        description={copy.dailyMessagesChannel}
        data={analyticsSeries}
        channels={[analyticsChannel]}
      />

      <Panel title={copy.currentConversations}>
        <ContactRows conversations={channelConversations} />
      </Panel>
    </div>
  );
}

function ChannelKnowledgeTab({ bot }: { bot: (typeof bots)[number] }) {
  const copy = useCopy();
  const locale = useLocaleKey();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const base = knowledgeBases.find((item) => item.id === bot.knowledgeBaseId);

  if (!base) {
    return (
      <>
        <Panel title={copy.knowledgeConnected}>
          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] dark:bg-black p-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-zinc-950 text-[#2563EB] ring-1 ring-[#E2E8F0] dark:ring-white/10">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-base font-bold text-[#0F172A] dark:text-slate-100">{copy.selectKnowledge}</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">{copy.selectKnowledgeDesc}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <Button className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]" onClick={() => setIsSelectOpen(true)}>{copy.selectKnowledge}</Button>
              <Button variant="outline" className="border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 text-[#2563EB] hover:bg-[#F8FAFC] dark:hover:bg-white/5">
                <Link href="/knowledge">{copy.createNewKnowledge}</Link>
              </Button>
            </div>
          </div>
        </Panel>
        <SelectKnowledgeModal open={isSelectOpen} onClose={() => setIsSelectOpen(false)} />
      </>
    );
  }

  return (
    <Panel title={copy.knowledgeConnected}>
      <div className="mb-5 flex flex-col gap-3 rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-[#0F172A] dark:text-slate-100">{base.name}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{base.resources.length} {copy.resourcesConnected}</p>
        </div>
        <Button variant="outline" className="border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 text-[#2563EB] hover:bg-white dark:bg-zinc-950" onClick={() => setIsSelectOpen(true)}>{copy.change}</Button>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#E2E8F0] dark:border-white/10">
        <div className="hidden grid-cols-[minmax(220px,1fr)_120px_120px_140px] border-b border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 lg:grid">
          <span>{copy.name}</span>
          <span>{copy.type}</span>
          <span>{copy.status}</span>
          <span>{copy.updated}</span>
        </div>
        <div className="divide-y divide-[#E2E8F0] dark:divide-white/10">
          {base.resources.map((resource) => (
            <div key={resource.name} className="grid gap-3 bg-white dark:bg-zinc-950 px-4 py-4 lg:grid-cols-[minmax(220px,1fr)_120px_120px_140px] lg:items-center lg:gap-0">
              <span className="flex min-w-0 items-center gap-3">
                <FileText className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" />
                <span className="truncate text-sm font-semibold text-[#0F172A] dark:text-slate-100">{resource.name}</span>
              </span>
              <TableMeta label={copy.type} value={resource.type} />
              <span className={cn("w-fit rounded-full px-2.5 py-1 text-xs font-semibold", resource.status === "Indexed" ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-[#2563EB]")}>
                {resource.status === "Indexed" ? copy.indexed : copy.syncing}
              </span>
              <TableMeta label={copy.updated} value={formatRelativeTime(resource.updated, copy, locale)} />
            </div>
          ))}
        </div>
      </div>
      <SelectKnowledgeModal open={isSelectOpen} onClose={() => setIsSelectOpen(false)} />
    </Panel>
  );
}

function ChannelContactsTab({ bot }: { bot: (typeof bots)[number] }) {
  const copy = useCopy();
  const channelConversations = conversations.filter((conversation) => conversation.bot === bot.name || conversation.channel === bot.channel);

  return (
    <Panel title={copy.contacts}>
      <ContactRows conversations={channelConversations} />
    </Panel>
  );
}

function ChannelAnalyticsTab({ bot }: { bot: (typeof bots)[number] }) {
  const copy = useCopy();
  const channel = channelAnalytics.find((item) => item.bot === bot.name) ?? channelAnalytics[0];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="grid gap-4">
          <AnalyticsStatusCard label={copy.channelStatus} value={channel.active ? copy.active : copy.inactive} detail={channelLabel(bot.channelType, copy)} icon={BarChart3} />
          <AnalyticsStatusCard label={copy.messages} value={channel.messages.toLocaleString()} detail={copy.handledByChannel} icon={MessageSquareText} />
        </div>
        <MessageShareDonut channels={[channel]} />
      </div>
      <AnalyticsChartCard
        title={copy.messagesByDay}
        description={`${channelLabel(bot.channel, copy)} ${copy.messageVolumeChannel}`}
        data={analyticsSeries}
        channels={[channel]}
      />
    </div>
  );
}

function ContactRows({ conversations: rows }: { conversations: Array<(typeof conversations)[number]> }) {
  const copy = useCopy();
  const locale = useLocaleKey();

  if (rows.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] dark:bg-black p-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
        {copy.noContacts}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#E2E8F0] dark:border-white/10">
      <div className="hidden grid-cols-[minmax(220px,1.4fr)_170px_150px_130px_120px_80px] border-b border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 lg:grid">
        <span>{copy.client}</span>
        <span>{copy.channel}</span>
        <span>{copy.agent}</span>
        <span>{copy.status}</span>
        <span>{copy.lastActive}</span>
        <span className="text-right">{copy.action}</span>
      </div>
      <div className="divide-y divide-[#E2E8F0] dark:divide-white/10">
        {rows.map((conversation) => {
          const ConversationIcon = conversation.channelIcon;

          return (
            <Link
              key={conversation.id}
              href={`/conversations/${conversation.id}`}
              className="grid gap-3 bg-white dark:bg-zinc-950 px-4 py-4 transition hover:bg-[#F8FAFC] dark:hover:bg-white/5 lg:grid-cols-[minmax(220px,1.4fr)_170px_150px_130px_120px_80px] lg:items-center lg:gap-0"
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-[#0F172A] dark:text-slate-100">{conversation.client}</span>
                <span className="mt-1 block truncate text-xs text-slate-500 dark:text-slate-400">{demoText(conversation.lastMessage, locale)}</span>
              </span>
              <span className="flex items-center justify-between gap-4 text-sm lg:block">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 lg:hidden">{copy.channel}</span>
                <span className="flex items-center gap-2 font-medium text-slate-600 dark:text-slate-300">
                  <ConversationIcon className="h-4 w-4 text-[#2563EB]" />
                  <span className="truncate">{channelLabel(conversation.channel, copy)}</span>
                </span>
              </span>
              <TableMeta label={copy.agent} value={conversation.bot} />
              <span className="flex items-center justify-between lg:block">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 lg:hidden">{copy.status}</span>
                <ConversationStatus status={conversation.status} />
              </span>
              <TableMeta label={copy.lastActive} value={formatRelativeTime(conversation.lastActive, copy, locale)} />
              <span className="inline-flex items-center justify-between text-sm font-semibold text-[#2563EB] lg:justify-end">
                <span className="lg:hidden">{copy.viewChat}</span>
                <span className="hidden lg:inline">{copy.open}</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Page({
  title,
  eyebrow,
  action,
  href,
  children,
  wide = false,
}: {
  title: string;
  eyebrow?: string;
  action?: string;
  href?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="min-h-full bg-[#F8FAFC] dark:bg-black">
      <div className={cn("mx-auto space-y-6 p-4 sm:p-6 lg:p-8", wide ? "max-w-[1500px]" : "max-w-7xl")}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">{eyebrow}</p>}
            <h1 className={cn("text-3xl font-bold text-[#0F172A] dark:text-slate-100", eyebrow && "mt-2")}>{title}</h1>
          </div>
          {action && (
            <Button className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]">
              {href ? <Link href={href} className="flex items-center gap-2"><Plus className="h-4 w-4" />{action}</Link> : action}
            </Button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

function Panel({ title, action, children, compact = false }: { title: string; action?: React.ReactNode; children: React.ReactNode; compact?: boolean }) {
  return (
    <section className={cn("rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950", compact ? "p-4" : "p-6")}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-base font-bold text-[#0F172A] dark:text-slate-100">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function MetricCard({ label, value, detail, icon: Icon }: { label: string; value: string; detail: string; icon: React.ElementType }) {
  return (
    <article className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
        <Icon className="h-4 w-4 text-[#2563EB]" />
      </div>
      <p className="mt-4 text-3xl font-bold text-[#0F172A] dark:text-slate-100">{value}</p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{detail}</p>
    </article>
  );
}

function AnalyticsStatusCard({ label, value, detail, icon: Icon }: { label: string; value: string; detail: string; icon: React.ElementType }) {
  return (
    <article className="flex min-h-[126px] items-center justify-between gap-4 rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 p-5">
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
        <p className="mt-3 text-3xl font-bold text-[#0F172A] dark:text-slate-100">{value}</p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{detail}</p>
      </div>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DBEAFE] dark:bg-white/10 text-[#2563EB]">
        <Icon className="h-5 w-5" />
      </div>
    </article>
  );
}

function BotRow({ bot }: { bot: (typeof bots)[number] }) {
  return (
    <Link href={`/channels/${bot.id}/overview`} className="flex items-center justify-between gap-4 rounded-xl border border-[#E2E8F0] dark:border-white/10 p-4 transition hover:bg-[#F8FAFC] dark:hover:bg-white/5">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DBEAFE] dark:bg-white/10 text-[#2563EB]">
          <Bot className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-[#0F172A] dark:text-slate-100">{bot.name}</p>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">{bot.role}</p>
        </div>
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <StatusBadge status={bot.status} />
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{bot.safety}</span>
      </div>
    </Link>
  );
}

function BotTableRow({ bot }: { bot: (typeof bots)[number] }) {
  const copy = useCopy();
  const locale = useLocaleKey();

  return (
    <div className="grid gap-3 bg-white dark:bg-zinc-950 px-4 py-4 lg:grid-cols-[minmax(220px,1.4fr)_160px_160px_110px_120px_130px_80px] lg:items-center lg:gap-0">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DBEAFE] dark:bg-white/10 text-[#2563EB]">
          <Bot className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#0F172A] dark:text-slate-100">{bot.name}</p>
          <p className="truncate text-xs text-slate-500 dark:text-slate-400">{bot.role}</p>
        </div>
      </div>

      <TableMeta label={copy.agentModel} value={bot.model} />
      <TableMeta label={copy.channel} value={channelLabel(bot.channel, copy)} />
      <div className="flex items-center justify-between lg:block">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 lg:hidden">{copy.status}</span>
        <StatusBadge status={bot.status} />
      </div>
      <TableMeta label={copy.messages} value={bot.messages} />
      <TableMeta label={copy.lastActive} value={formatRelativeTime(bot.updated, copy, locale)} />
      <Link href={`/channels/${bot.id}/overview`} className="inline-flex items-center justify-between rounded-lg text-sm font-semibold text-[#2563EB] lg:justify-end">
        <span className="lg:hidden">{copy.openChannel}</span>
        <span className="hidden lg:inline">{copy.open}</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function TableMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm lg:block">
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 lg:hidden">{label}</span>
      <span className="font-medium text-[#0F172A] dark:text-slate-100 lg:text-slate-600 dark:text-slate-300">{value}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const copy = useCopy();

  return (
    <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", status === "Live" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700")}>
      {status === "Live" ? copy.live : copy.review}
    </span>
  );
}

function ConversationStatus({ status }: { status: string }) {
  const copy = useCopy();
  const tone =
    status === "AI handled"
      ? "bg-emerald-50 text-emerald-700"
      : status === "Escalated"
        ? "bg-amber-50 text-amber-700"
        : "bg-[#DBEAFE] dark:bg-white/10 text-[#2563EB]";

  const label =
    status === "AI handled" ? copy.aiHandled : status === "Escalated" ? copy.escalated : copy.needsReview;

  return <span className={cn("whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold", tone)}>{label}</span>;
}

function MessageShareDonut({
  channels,
}: {
  channels: typeof channelAnalytics;
}) {
  const copy = useCopy();
  const selectedTotal = channels.reduce((sum, channel) => sum + channel.messages, 0);
  const topChannel = [...channels].sort((left, right) => right.messages - left.messages)[0];

  return (
    <article className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 p-6">
      <div className="grid h-full min-h-[268px] gap-6 xl:grid-cols-[minmax(0,1fr)_190px] xl:items-center">
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{copy.messages}</p>
              <p className="mt-3 text-4xl font-bold text-[#0F172A] dark:text-slate-100">{selectedTotal.toLocaleString()}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {channels.length === channelAnalytics.length ? copy.allSelectedChannels : `${channels.length} ${copy.selectedChannels}`}
              </p>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DBEAFE] dark:bg-white/10 text-[#2563EB]">
              <MessageSquareText className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">{copy.largestSource}</p>
            <div className="mt-2 flex items-center justify-between gap-4">
              <span className="flex min-w-0 items-center gap-2 text-sm font-semibold text-[#0F172A] dark:text-slate-100">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: topChannel?.color }} />
                <span className="truncate">{topChannel ? channelLabel(topChannel.name, copy) : ""}</span>
              </span>
              <span className="text-sm font-bold text-[#0F172A] dark:text-slate-100">{topChannel?.messages.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="relative mx-auto h-[184px] w-[184px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={channels}
                dataKey="messages"
                nameKey="name"
                innerRadius={58}
                outerRadius={88}
                paddingAngle={1}
                stroke="none"
              >
                {channels.map((channel) => (
                  <Cell key={channel.id} fill={channel.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  border: "1px solid #E2E8F0",
                  borderRadius: 12,
                  boxShadow: "none",
                  color: "#0F172A",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-[#0F172A] dark:text-slate-100">{selectedTotal.toLocaleString()}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{copy.total}</span>
          </div>
        </div>
          <div className="mt-4 space-y-2">
          {channels.map((channel) => {
            const percent = selectedTotal > 0 ? Math.round((channel.messages / selectedTotal) * 100) : 0;

            return (
              <div key={channel.id} className="flex items-center justify-between gap-3 text-sm">
                <span className="flex min-w-0 items-center gap-2 font-medium text-slate-600 dark:text-slate-300">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: channel.color }} />
                  <span className="truncate">{channelLabel(channel.name, copy)}</span>
                </span>
                <span className="shrink-0 font-semibold text-[#0F172A] dark:text-slate-100">{channel.messages.toLocaleString()} · {percent}%</span>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </article>
  );
}

function AnalyticsChartCard({
  title,
  description,
  data,
  channels,
}: {
  title: string;
  description: string;
  data: Array<Record<string, string | number>>;
  channels: typeof channelAnalytics;
}) {
  const copy = useCopy();

  return (
    <section className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-bold text-[#0F172A] dark:text-slate-100">{title}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {channels.map((channel) => (
            <span key={channel.id} className="inline-flex items-center gap-1.5 rounded-full bg-[#F8FAFC] dark:bg-black px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: channel.color }} />
              {channelLabel(channel.name, copy)}
            </span>
          ))}
        </div>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -18, right: 12, top: 12, bottom: 0 }}>
            <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                border: "1px solid #E2E8F0",
                borderRadius: 12,
                boxShadow: "none",
                color: "#0F172A",
              }}
            />
            {channels.map((channel) => (
              <Line
                key={channel.id}
                type="monotone"
                dataKey={channel.id}
                name={channelLabel(channel.name, copy)}
                stroke={channel.color}
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 4 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function LinkAction({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function FormGrid({ items }: { items: Array<[string, string]> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(([label, value]) => (
        <label key={label} className="block">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</span>
          <span className="mt-2 flex h-11 items-center rounded-lg border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black px-3 text-sm font-semibold text-[#0F172A] dark:text-slate-100">
            {value}
          </span>
        </label>
      ))}
    </div>
  );
}

function Rule({ children, enabled = false }: { children: React.ReactNode; enabled?: boolean }) {
  return (
    <div className="mb-3 flex items-center gap-3 rounded-xl border border-[#E2E8F0] dark:border-white/10 p-4">
      {enabled ? <CheckCircle2 className="h-5 w-5 text-emerald-500" /> : <Lock className="h-5 w-5 text-[#2563EB]" />}
      <span className="text-sm font-medium text-[#0F172A] dark:text-slate-100">{children}</span>
    </div>
  );
}

function ChatBubble({ side, text }: { side: "child" | "bot" | string; text: string }) {
  return (
    <div className={cn("mb-3 flex", side !== "child" && "justify-end")}>
      <div className={cn("max-w-[78%] rounded-2xl p-4 text-sm leading-6", side === "child" ? "bg-[#F8FAFC] dark:bg-black text-[#0F172A] dark:text-slate-100" : "bg-[#DBEAFE] dark:bg-white/10 text-[#0F172A] dark:text-slate-100")}>
        {text}
      </div>
    </div>
  );
}

function ModalShell({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  const copy = useCopy();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/30 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 shadow-none">
        <div className="flex items-center justify-between border-b border-[#E2E8F0] dark:border-white/10 px-5 py-4">
          <h2 className="text-base font-bold text-[#0F172A] dark:text-slate-100">{title}</h2>
          <button type="button" onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:bg-[#F8FAFC] dark:hover:bg-white/5 hover:text-[#0F172A] dark:text-slate-100">
            <X className="h-4 w-4" />
            <span className="sr-only">{copy.close}</span>
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

function NewFolderModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const copy = useCopy();

  return (
    <ModalShell open={open} onClose={onClose} title={copy.newFolder}>
      <label className="block">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{copy.folderName}</span>
        <input
          autoFocus
          className="mt-2 h-11 w-full rounded-lg border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 px-3 text-sm font-medium text-[#0F172A] dark:text-slate-100 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE] dark:focus:ring-white/10"
          placeholder={copy.realEstatePlaceholder}
        />
      </label>
      <div className="mt-5 flex justify-end gap-2">
        <Button variant="outline" className="border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950" onClick={onClose}>{copy.cancel}</Button>
        <Button className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]" onClick={onClose}>{copy.createFolder}</Button>
      </div>
    </ModalShell>
  );
}

function SelectKnowledgeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const copy = useCopy();

  return (
    <ModalShell open={open} onClose={onClose} title={copy.selectKnowledge}>
      <div className="space-y-2">
        {knowledgeBases.map((base) => (
          <button
            key={base.id}
            type="button"
            onClick={onClose}
            className="flex w-full items-center justify-between gap-4 rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 p-4 text-left transition hover:bg-[#F8FAFC] dark:hover:bg-white/5"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#DBEAFE] dark:bg-white/10 text-[#2563EB]">
                <Folder className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-[#0F172A] dark:text-slate-100">{base.name}</span>
                <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">{base.resources.length} {copy.resources}</span>
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" />
          </button>
        ))}
      </div>
      <div className="mt-5 flex justify-end gap-2 border-t border-[#E2E8F0] dark:border-white/10 pt-4">
        <Button variant="outline" className="border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950" onClick={onClose}>{copy.cancel}</Button>
        <Button className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]">
          <Link href="/knowledge">{copy.createNewKnowledge}</Link>
        </Button>
      </div>
    </ModalShell>
  );
}

function AddResourceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const copy = useCopy();
  const [tab, setTab] = useState<"upload" | "text">("upload");

  return (
    <ModalShell open={open} onClose={onClose} title={copy.addResource}>
      <div className="mb-5 flex border-b border-[#E2E8F0] dark:border-white/10">
        {[
          ["upload", copy.uploadAsset],
          ["text", copy.addText],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value as "upload" | "text")}
            className={cn(
              "border-b-2 px-3 pb-3 text-sm font-semibold transition",
              tab === value ? "border-[#2563EB] text-[#0F172A] dark:text-slate-100" : "border-transparent text-slate-500 dark:text-slate-400 hover:text-[#0F172A] dark:text-slate-100",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "upload" ? (
        <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] dark:bg-black p-8 text-center">
          <Upload className="h-8 w-8 text-[#2563EB]" />
          <p className="mt-3 text-sm font-semibold text-[#0F172A] dark:text-slate-100">{copy.dragAssets}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{copy.fileTypes}</p>
          <Button variant="outline" className="mt-5 border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 text-[#2563EB] hover:bg-white dark:bg-zinc-950">{copy.chooseFiles}</Button>
        </div>
      ) : (
        <label className="block">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{copy.textContent}</span>
          <textarea
            className="mt-2 min-h-56 w-full resize-none rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 p-3 text-sm text-[#0F172A] dark:text-slate-100 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE] dark:focus:ring-white/10"
            placeholder={copy.textPlaceholder}
          />
        </label>
      )}

      <div className="mt-5 flex justify-end gap-2">
        <Button variant="outline" className="border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950" onClick={onClose}>{copy.cancel}</Button>
        <Button className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]" onClick={onClose}>{copy.addResourceButton}</Button>
      </div>
    </ModalShell>
  );
}
