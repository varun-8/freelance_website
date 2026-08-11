import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Scissors,
    ShoppingBag,
    Utensils,
    Cake,
    Shirt,
    Building2,
    GraduationCap,
    Stethoscope,
    Rocket,
    User,
    Briefcase,
    Smartphone,
    LayoutGrid,
    Cog,
    Calendar,
    Shield,
    BarChart3,
    CreditCard,
    Package,
    Users,
    Sparkles,
    Sliders,
    Zap,
    Layers,
    Search,
    X,
    ArrowRight,
    CheckCircle2,
    Clock,
    Grid,
    List,
    ChevronDown
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const sectors = [
    { id: 'all', label: 'All Sectors' },
    { id: 'retail', label: 'Manufacturing & Retail' },
    { id: 'hospitality', label: 'Food & Hospitality' },
    { id: 'services', label: 'Services & Health' },
    { id: 'tech', label: 'Tech & Enterprise' },
];

const tagFilters = ['All', 'Popular', 'High ROI', 'Automated', 'Fast Track'];

const categories = [
    {
        id: 'textile',
        sector: 'retail',
        label: 'Textile Industry',
        icon: Scissors,
        solutions: [
            { title: 'Textile ERP & Loom Management', desc: 'Real-time production tracking across weaving, spinning, and loom operations.', icon: Layers, tag: 'High ROI', time: '2-4 Weeks', features: ['Real-time loom status dashboard', 'Shift yield & waste analytics', 'Automated downtime alerts'] },
            { title: 'Fabric & Yarn Inventory System', desc: 'Automated stock alerts, batch tracking, and warehouse management.', icon: Package, tag: 'Automated', time: '1-3 Weeks', features: ['Batch & shade variance tracking', 'Low stock triggers & reorders', 'Barcode & QR scanner integration'] },
            { title: 'Dyeing & Process Workflow', desc: 'Recipe management, chemical inventory, and batch processing schedules.', icon: Sliders, tag: 'Precision', time: '2-3 Weeks', features: ['Chemical ratio calculators', 'Stage-wise process timers', 'Quality control logs'] },
            { title: 'Multi-Mill Billing Dashboard', desc: 'GST compliant invoices, party ledgers, and credit limit controllers.', icon: CreditCard, tag: 'Popular', time: '1-2 Weeks', features: ['GST compliance & e-Way bills', 'Party ledger credit limits', 'Automated ledger statements'] },
            { title: 'Quality Assurance & Inspection', desc: 'Defect logging, roll grading, and fabric quality audit reports.', icon: Shield, tag: 'ISO Ready', time: '2-3 Weeks', features: ['Roll grading matrices', 'Defect heatmap analytics', 'PDF quality export'] },
            { title: 'Supplier & Order Automation', desc: 'Purchase orders, dispatch notes, and supplier performance metrics.', icon: Zap, tag: 'Fast Track', time: '1-2 Weeks', features: ['Automated PO generation', 'Supplier rating metrics', 'Instant dispatch notifications'] },
        ],
    },
    {
        id: 'ecommerce',
        sector: 'retail',
        label: 'eCommerce Brand',
        icon: ShoppingBag,
        solutions: [
            { title: 'Full eCommerce Platform', desc: 'High-converting online store with seamless checkout and catalog management.', icon: ShoppingBag, tag: 'Popular', time: '2-4 Weeks', features: ['Sub-second page speeds', 'Custom cart & checkout flow', 'Dynamic promo engine'] },
            { title: 'Multi-Payment Gateway', desc: 'Integration with Stripe, Razorpay, UPI, credit cards, and Apple Pay.', icon: CreditCard, tag: 'Essential', time: '1 Week', features: ['Instant UPI & card checkout', 'Automated refund engine', 'Multi-currency support'] },
            { title: 'Order & Inventory System', desc: 'Live inventory sync across channels, warehouses, and fulfillment centers.', icon: Package, tag: 'Automated', time: '2-3 Weeks', features: ['Multi-channel stock sync', 'Fulfillment center routing', 'Low-stock reorder triggers'] },
            { title: 'Customer Dashboard', desc: 'Order tracking, wishlist, saved addresses, and profile management.', icon: Users, tag: 'High UX', time: '1-2 Weeks', features: ['Live courier tracking map', 'One-click reordering', 'Loyalty points overview'] },
            { title: 'Analytics & Reporting', desc: 'Real-time sales insights, conversion funnels, and revenue metrics.', icon: BarChart3, tag: 'Data-Driven', time: '1-2 Weeks', features: ['Conversion funnel tracking', 'Cohort retention charts', 'Exportable CSV/PDF reports'] },
            { title: 'Mobile-Optimised Store', desc: 'PWA support and sub-second mobile load speeds for maximum sales.', icon: Smartphone, tag: 'High Speed', time: '1-2 Weeks', features: ['Offline PWA capability', 'Touch-first product filters', 'Instant mobile checkout'] },
        ],
    },
    {
        id: 'restaurant',
        sector: 'hospitality',
        label: 'Restaurant & Café',
        icon: Utensils,
        solutions: [
            { title: 'Digital Menu & Ordering System', desc: 'QR code menus, table ordering, and instant kitchen ticket printing.', icon: Utensils, tag: 'Trending', time: '1-2 Weeks', features: ['Contactless QR ordering', 'Instant kitchen ticket print', 'Dynamic item availability'] },
            { title: 'Kitchen Display System (KDS)', desc: 'Live order routing for chefs, preparation countdowns, and order status.', icon: LayoutGrid, tag: 'Real-time', time: '1-2 Weeks', features: ['Live chef order board', 'Item prep timer alerts', 'Order completion ping'] },
            { title: 'Table Reservation Platform', desc: 'Online booking calendar, guest seating plans, and SMS confirmations.', icon: Calendar, tag: 'High ROI', time: '1-2 Weeks', features: ['Interactive floor plan map', 'Automated SMS/WhatsApp pings', 'Deposit payment integration'] },
            { title: 'POS & Billing Integration', desc: 'Fast counter billing, split bills, tips, and daily sales closing.', icon: CreditCard, tag: 'Popular', time: '1-2 Weeks', features: ['1-click bill splitting', 'Cash drawer integration', 'End-of-day Z-report'] },
            { title: 'Delivery Partner Connector', desc: 'Unified order aggregator syncing Zomato, Swiggy, and direct delivery.', icon: Zap, tag: 'Aggregator', time: '2 Weeks', features: ['Unified order feed', 'Auto menu sync', 'Driver assignment dispatch'] },
            { title: 'Customer Loyalty Program', desc: 'Reward points, cashback codes, and automated birthday coupons.', icon: Sparkles, tag: 'Retention', time: '1 Week', features: ['Automated SMS reward alerts', 'Tiered VIP memberships', 'Custom discount codes'] },
        ],
    },
    {
        id: 'bakery',
        sector: 'hospitality',
        label: 'Bakery & Food',
        icon: Cake,
        solutions: [
            { title: 'Custom Food Ordering App', desc: 'Branded online store for customized cakes, pastries, and catering.', icon: Cake, tag: 'Popular', time: '2 Weeks', features: ['Custom cake builder (layers/flavors)', 'Delivery slot selector', 'Photo reference upload'] },
            { title: 'Recipe & Ingredient Costing', desc: 'Raw material usage tracking and exact dish profit margin analysis.', icon: Sliders, tag: 'High ROI', time: '1-2 Weeks', features: ['Ingredient cost matrix', 'Real-time margin calculator', 'Batch yield optimizer'] },
            { title: 'Daily Production Planner', desc: 'Automated baking schedules based on pre-orders and historical demand.', icon: Calendar, tag: 'Automated', time: '1-2 Weeks', features: ['Pre-order aggregation', 'Batch size calculator', 'Waste tracking logs'] },
            { title: 'Express Counter POS', desc: 'Touchscreen billing for fast retail counter queues.', icon: CreditCard, tag: 'Fast Track', time: '1 Week', features: ['Touchscreen item grid', 'Thermal receipt print', 'Quick barcode scan'] },
            { title: 'Wholesale Order Portal', desc: 'B2B ordering dashboard for cafes and supermarket buyers.', icon: Users, tag: 'B2B Ready', time: '2 Weeks', features: ['Tiered wholesale pricing', 'Bulk reorder calendar', 'Invoice payment terms'] },
            { title: 'Delivery Fleet Tracker', desc: 'Temperature-controlled dispatch tracking and driver route optimizer.', icon: Package, tag: 'Logistics', time: '2 Weeks', features: ['Live driver GPS map', 'Route optimization', 'Proof of delivery photo'] },
        ],
    },
    {
        id: 'fashion',
        sector: 'retail',
        label: 'Clothing & Fashion',
        icon: Shirt,
        solutions: [
            { title: 'Lookbook & E-Store Platform', desc: 'Immersive visual catalog with high-res zoom and video showcases.', icon: Shirt, tag: 'Visual Excellence', time: '2-3 Weeks', features: ['4K lookbook showcases', 'Video thumbnail preview', 'Shop-the-look tags'] },
            { title: 'Size & Variant Management', desc: 'Color swatches, size recommendations, and live stock per variant.', icon: Layers, tag: 'High UX', time: '1-2 Weeks', features: ['Interactive size charts', 'Variant color swatches', 'Back-in-stock alerts'] },
            { title: 'Multi-Store POS Sync', desc: 'Unified inventory across retail boutiques and online store.', icon: LayoutGrid, tag: 'Cloud Sync', time: '2 Weeks', features: ['Unified stock ledger', 'Cross-store order transfer', 'Real-time sales feed'] },
            { title: 'Flash Sale & Coupon Engine', desc: 'Timed discounts, promo codes, and automated cart recovery.', icon: Zap, tag: 'High ROI', time: '1 Week', features: ['Countdown sale timers', 'Automated cart SMS pings', 'Single-use promo codes'] },
            { title: 'Instagram Shopping Connector', desc: 'Direct social commerce checkout integration.', icon: ShoppingBag, tag: 'Social Commerce', time: '1 Week', features: ['Insta catalog sync', 'Tagging on posts', 'In-app checkout sync'] },
            { title: 'Returns & Exchange Portal', desc: 'Self-service customer return requests and reverse logistics.', icon: Shield, tag: 'Self-Service', time: '1-2 Weeks', features: ['Customer self-return portal', 'Reverse pickup integration', 'Instant wallet credit'] },
        ],
    },
    {
        id: 'realestate',
        sector: 'services',
        label: 'Real Estate',
        icon: Building2,
        solutions: [
            { title: 'Property Listing Portal', desc: 'High-converting property showcases with location maps and filters.', icon: Building2, tag: 'Popular', time: '2-3 Weeks', features: ['Interactive map search', 'Filter by BHK/price/amenity', 'Lead capture forms'] },
            { title: 'Virtual 3D Tour Integration', desc: 'Embedded Matterport and 360-degree interactive walkthroughs.', icon: Sparkles, tag: 'Premium', time: '1-2 Weeks', features: ['360 walkthrough viewer', 'Room measurement tool', 'Agent call overlay'] },
            { title: 'Agent CRM & Lead Tracker', desc: 'Automated lead assignment, follow-up reminders, and deal pipelines.', icon: Users, tag: 'Automated', time: '2 Weeks', features: ['Auto-lead distribution', 'Follow-up WhatsApp bots', 'Sales pipeline Kanban'] },
            { title: 'EMI & Mortgage Calculator', desc: 'Interactive loan calculators for buyers.', icon: BarChart3, tag: 'Interactive', time: '1 Week', features: ['Custom interest rate slider', 'Amortization schedule export', 'Bank offer match'] },
            { title: 'Client Appointment Booking', desc: 'Automated site visit scheduling with calendar sync.', icon: Calendar, tag: 'Fast Track', time: '1-2 Weeks', features: ['Site visit calendar', 'Google Calendar sync', 'Automated driver/agent alert'] },
            { title: 'Automated WhatsApp Alerts', desc: 'Instant property brochure dispatch on WhatsApp.', icon: Zap, tag: 'High Conversion', time: '1 Week', features: ['Instant brochure bot', 'Location pin dispatch', 'Agent callback trigger'] },
        ],
    },
    {
        id: 'education',
        sector: 'services',
        label: 'Educational Institute',
        icon: GraduationCap,
        solutions: [
            { title: 'Student Management System', desc: 'Complete ERP for student admissions, records, and ID cards.', icon: GraduationCap, tag: 'Enterprise', time: '3-4 Weeks', features: ['Admission workflow', 'Digital student profiles', 'Automated ID card generator'] },
            { title: 'Online Fee Payment Portal', desc: 'Automated fee collection, receipts, and installment reminders.', icon: CreditCard, tag: 'High ROI', time: '1-2 Weeks', features: ['Instant fee receipt PDF', 'Installment reminders', 'Late fee calculation'] },
            { title: 'Exam & Grade Management', desc: 'Report card generation, GPA calculators, and online test portal.', icon: BarChart3, tag: 'Academic', time: '2-3 Weeks', features: ['Automated GPA & rank generator', 'Online MCQ exam engine', 'Parent report card download'] },
            { title: 'Attendance & RFID System', desc: 'Biometric attendance tracking with instant parent notification.', icon: Shield, tag: 'Automated', time: '2 Weeks', features: ['Biometric & RFID sync', 'SMS parent alerts', 'Monthly attendance logs'] },
            { title: 'E-Learning & Course Portal', desc: 'Video lectures, assignment submissions, and PDF resource downloads.', icon: Layers, tag: 'LMS Platform', time: '2-3 Weeks', features: ['Protected video streaming', 'Assignment grading desk', 'Student discussion forum'] },
            { title: 'Parent Communication App', desc: 'Direct messaging, circular announcements, and event calendars.', icon: Users, tag: 'Popular', time: '1-2 Weeks', features: ['Push circular alerts', 'Teacher-parent chat', 'Exam schedule calendar'] },
        ],
    },
    {
        id: 'healthcare',
        sector: 'services',
        label: 'Healthcare',
        icon: Stethoscope,
        solutions: [
            { title: 'Online Appointment Booking', desc: 'Doctor schedule management, slot selection, and booking engine.', icon: Calendar, tag: 'Popular', time: '1-2 Weeks', features: ['Doctor slot availability', 'Pre-payment deposit lock', 'Instant SMS confirmation'] },
            { title: 'Electronic Health Records (EHR)', desc: 'Secure cloud prescriptions, lab results, and patient history.', icon: Shield, tag: 'HIPAA Standard', time: '3-4 Weeks', features: ['Encrypted medical history', 'Digital Rx prescription builder', 'Lab test PDF attachments'] },
            { title: 'Patient Portal & Telemedicine', desc: 'HD video consultation module with digital prescription generation.', icon: Users, tag: 'High Tech', time: '2-3 Weeks', features: ['In-browser HD video calls', 'Live screen share for scans', 'Instant digital Rx dispatch'] },
            { title: 'Pharmacy & Inventory Management', desc: 'Medicine batch tracking, expiry alerts, and supplier reordering.', icon: Package, tag: 'Automated', time: '2 Weeks', features: ['Batch expiry countdown alerts', 'Barcode medicine lookup', 'Supplier PO auto-creation'] },
            { title: 'Automated SMS/WhatsApp Reminders', desc: 'Reduce no-shows with automated appointment notifications.', icon: Zap, tag: 'High ROI', time: '1 Week', features: ['Timed 24hr/2hr reminders', '1-click appointment confirmation', 'Reschedule link'] },
            { title: 'Multi-Branch Clinic Dashboard', desc: 'Unified revenue and doctor performance reporting.', icon: BarChart3, tag: 'Enterprise', time: '2 Weeks', features: ['Cross-clinic revenue insights', 'Doctor occupancy metrics', 'Patient retention analytics'] },
        ],
    },
    {
        id: 'startup',
        sector: 'tech',
        label: 'Startup',
        icon: Rocket,
        solutions: [
            { title: 'Rapid MVP Web App Development', desc: 'Production-ready product launched in weeks to validate your market.', icon: Rocket, tag: 'Fast Track', time: '2-3 Weeks', features: ['Production-ready codebase', 'User auth & DB architecture', 'Stripe/Payment integration'] },
            { title: 'Scalable SaaS Architecture', desc: 'Multi-tenant database design built to handle 100x traffic spikes.', icon: Layers, tag: 'Cloud Native', time: '3-4 Weeks', features: ['Multi-tenant data isolation', 'Auto-scaling AWS/Vercel setup', 'Microservices ready'] },
            { title: 'Investor Pitch Demo Site', desc: 'Interactive prototype site designed to secure funding.', icon: Sparkles, tag: 'High Impact', time: '1 Week', features: ['Interactive product demo', 'Pitch deck viewer embed', 'Investor inquiry capture'] },
            { title: 'User Analytics & Growth Tracking', desc: 'Funnel analytics, product telemetry, and churn monitoring.', icon: BarChart3, tag: 'Data-Driven', time: '1-2 Weeks', features: ['User behavior telemetry', 'Cohort retention analysis', 'Conversion funnel tracking'] },
            { title: 'Payment & Subscription Engine', desc: 'Stripe Billing, free trials, and tier upgrade management.', icon: CreditCard, tag: 'Popular', time: '1-2 Weeks', features: ['Monthly/Annual subscription plans', 'Prorated tier upgrades', 'Automated invoice emails'] },
            { title: 'API & Microservices Stack', desc: 'Clean, documented REST/GraphQL APIs built for integrations.', icon: LayoutGrid, tag: 'Developer First', time: '2 Weeks', features: ['Swagger/OpenAPI docs', 'Rate limiting & API keys', 'Webhook dispatch queue'] },
        ],
    },
    {
        id: 'personal',
        sector: 'tech',
        label: 'Personal Brand',
        icon: User,
        solutions: [
            { title: 'High-Converting Portfolio Site', desc: 'Premium personal website designed for high-paying client inquiries.', icon: User, tag: 'Visual Excellence', time: '1 Week', features: ['High-impact Hero showcase', 'Interactive project grid', 'Direct booking calendar embed'] },
            { title: 'Newsletter & Blog Platform', desc: 'SEO-optimized publication CMS with subscriber monetization.', icon: Layers, tag: 'SEO Optimized', time: '1-2 Weeks', features: ['Substack/Ghost style editor', 'Subscriber gate paywalls', 'SEO meta tags auto-generator'] },
            { title: 'Course & Digital Product Store', desc: 'E-book downloads, video courses, and instant access checkout.', icon: ShoppingBag, tag: 'Monetization', time: '1-2 Weeks', features: ['Instant digital download delivery', 'Drip course lesson unlocked', 'Watermarked PDF generator'] },
            { title: 'Booking & Coaching Portal', desc: '1-on-1 consultation scheduling with instant payment lock.', icon: Calendar, tag: 'Popular', time: '1 Week', features: ['Stripe/Razorpay deposit lock', 'Cal.com/Calendly sync', 'Custom intake questionnaire'] },
            { title: 'Social Media Aggregator', desc: 'Live feed sync for YouTube, Twitter, and LinkedIn content.', icon: Zap, tag: 'Social Sync', time: '1 Week', features: ['Live YouTube video grid', 'X/Twitter thread embeds', 'Auto-updating follower stats'] },
            { title: 'Personal Analytics Dashboard', desc: 'Track audience growth and bio link clicks in real-time.', icon: BarChart3, tag: 'Analytics', time: '1 Week', features: ['Link click heatmap', 'Traffic source breakdown', 'Lead export CSV'] },
        ],
    },
    {
        id: 'corporate',
        sector: 'tech',
        label: 'Corporate Business',
        icon: Briefcase,
        solutions: [
            { title: 'Enterprise Portal & Intranet', desc: 'Centralized employee hub for company announcements and tools.', icon: Briefcase, tag: 'Enterprise', time: '3-4 Weeks', features: ['Company noticeboard feed', 'Single Sign-On (SSO) login', 'Department directory search'] },
            { title: 'Multi-Department Workflow System', desc: 'Approval chains, task routing, and SLA tracking.', icon: LayoutGrid, tag: 'Automated', time: '2-3 Weeks', features: ['Multi-tier approval chains', 'Automatic task re-assignment', 'SLA breach alert pings'] },
            { title: 'Role-Based Access Control (RBAC)', desc: 'Enterprise security with granular user permission settings.', icon: Shield, tag: 'Security First', time: '2 Weeks', features: ['Granular permission matrices', 'Super-admin audit log', 'IP address whitelist rules'] },
            { title: 'Document Management System', desc: 'Version controlled cloud filing with audit trail logging.', icon: Layers, tag: 'Compliance', time: '2-3 Weeks', features: ['Version history timeline', 'Digital signature stamps', 'Encrypted cloud storage'] },
            { title: 'Executive KPI Dashboard', desc: 'C-suite visual reports pulling live data across departments.', icon: BarChart3, tag: 'Executive View', time: '2 Weeks', features: ['Live revenue & cost telemetry', 'Departmental target meters', 'Exportable C-suite decks'] },
            { title: 'Legacy Code Modernization', desc: 'Refactoring outdated systems into fast, cloud-native web apps.', icon: Zap, tag: 'Modernization', time: '3-6 Weeks', features: ['Zero-downtime database migration', 'API gateway wrapper', 'Responsive modern UI'] },
        ],
    },
    {
        id: 'mobileapp',
        sector: 'tech',
        label: 'Mobile App',
        icon: Smartphone,
        solutions: [
            { title: 'iOS & Android Native/Cross-App', desc: 'Single codebase app delivering native 60fps performance.', icon: Smartphone, tag: 'High Speed', time: '3-5 Weeks', features: ['Native iOS & Android builds', '60fps UI transitions', 'App Store submission ready'] },
            { title: 'Push Notification Engine', desc: 'Targeted user re-engagement messaging with deep links.', icon: Zap, tag: 'Engagement', time: '1-2 Weeks', features: ['Segmented user push triggers', 'Deep link screen routing', 'Rich image push alerts'] },
            { title: 'Offline Data Sync Engine', desc: 'Local SQLite caching with automatic background cloud sync.', icon: Layers, tag: 'Offline Ready', time: '2 Weeks', features: ['Zero-data loss local database', 'Background conflict resolver', 'Network change listener'] },
            { title: 'In-App Payment Gateway', desc: 'Native Apple Pay, Google Pay, and credit card processing.', icon: CreditCard, tag: 'Popular', time: '1-2 Weeks', features: ['Apple Pay & Google Pay native', 'In-App Subscriptions', 'Instant receipt validation'] },
            { title: 'Biometric Security Auth', desc: 'FaceID, TouchID, and encrypted token storage.', icon: Shield, tag: 'Security', time: '1 Week', features: ['FaceID / Fingerprint unlocks', 'Secure Keychain token storage', 'Auto session lock on idle'] },
            { title: 'Live Location & GPS Tracking', desc: 'Real-time driver or delivery tracking on interactive maps.', icon: Sparkles, tag: 'Real-Time', time: '2-3 Weeks', features: ['Low-battery background GPS', 'Interactive Mapbox/Google map', 'ETA calculation engine'] },
        ],
    },
    {
        id: 'admin',
        sector: 'tech',
        label: 'Admin Systems',
        icon: LayoutGrid,
        solutions: [
            { title: 'Custom Back-Office Admin Dashboard', desc: 'Tailored CRUD interface for complete control over your business data.', icon: LayoutGrid, tag: 'Popular', time: '1-3 Weeks', features: ['Tailored data tables & filters', 'Inline fast editing', 'Dark/Light mode interface'] },
            { title: 'Real-Time Analytics Charts', desc: 'Visual charts rendering live revenue, user signups, and usage.', icon: BarChart3, tag: 'Real-Time', time: '1-2 Weeks', features: ['Recharts/ChartJS integrations', 'Live WebSocket data streams', 'Custom date range comparison'] },
            { title: 'User & Role Permissions Portal', desc: 'Easily manage admin staff, superusers, and read-only roles.', icon: Users, tag: 'Control', time: '1-2 Weeks', features: ['1-click role assignment', 'Admin action audit timeline', 'Account suspension lock'] },
            { title: 'Data Export & Audit Logs', desc: 'Export CSV/PDF reports and inspect all system activity logs.', icon: Shield, tag: 'Audit Ready', time: '1 Week', features: ['Scheduled CSV report emails', 'Tamper-proof audit logs', 'Filterable system log tracer'] },
            { title: 'Automated Email/SMS Alerts', desc: 'Trigger notifications on system events or critical thresholds.', icon: Zap, tag: 'Automated', time: '1 Week', features: ['Custom event webhooks', 'Email/Twilio SMS integration', 'Alert frequency throttle'] },
            { title: 'Database Query & Report Builder', desc: 'Custom SQL query builder for non-technical managers.', icon: Sliders, tag: 'No-Code', time: '2 Weeks', features: ['Visual drag-and-drop builder', 'Saved team query presets', 'Scheduled report triggers'] },
        ],
    },
    {
        id: 'customsw',
        sector: 'tech',
        label: 'Custom Software',
        icon: Cog,
        solutions: [
            { title: 'Bespoke Business Automation', desc: 'Eliminate repetitive manual entry with automated software bots.', icon: Cog, tag: 'High ROI', time: '2-3 Weeks', features: ['Workflow bot triggers', 'Multi-app integration pipeline', 'Error catch & alert system'] },
            { title: 'Hardware & IoT Sensors Connector', desc: 'Collect telemetry from industrial sensors, machines, and controllers.', icon: Layers, tag: 'IoT Ready', time: '3-4 Weeks', features: ['MQTT & Modbus protocol connectors', 'Real-time telemetry stream', 'Threshold breach alerts'] },
            { title: 'Custom API & Middleware Integration', desc: 'Bridge legacy software with modern web platforms smoothly.', icon: Zap, tag: 'Middleware', time: '2 Weeks', features: ['Legacy DB connector bridges', 'Data transformer middleware', 'API rate limit buffer'] },
            { title: 'Automated Invoice Generator', desc: 'Generate PDF invoices, send email receipts, and update accounting.', icon: CreditCard, tag: 'Popular', time: '1-2 Weeks', features: ['Dynamic PDF layout template', 'Tally/QuickBooks auto sync', 'Recurring invoice scheduler'] },
            { title: 'Third-Party Webhook Handlers', desc: 'Reliable message queue processors handling millions of webhooks.', icon: Shield, tag: 'High Scalability', time: '2 Weeks', features: ['Redis queue buffer', 'Automatic exponential retries', 'Dead-letter queue inspector'] },
            { title: 'High-Throughput Batch Processor', desc: 'Background jobs for data migration, image processing, and reports.', icon: BarChart3, tag: 'High Speed', time: '2-3 Weeks', features: ['Multi-threaded job workers', 'Progress percentage stream', 'Resource usage monitor'] },
        ],
    },
    {
        id: 'booking',
        sector: 'hospitality',
        label: 'Booking Platforms',
        icon: Calendar,
        solutions: [
            { title: 'Multi-Resource Booking Calendar', desc: 'Book rooms, equipment, doctors, or staff without double-bookings.', icon: Calendar, tag: 'Popular', time: '2 Weeks', features: ['No double-booking engine', 'Multi-staff availability grid', 'Buffer time between slots'] },
            { title: 'Slot Management & Conflict Blocker', desc: 'Real-time slot availability rules and timezone converters.', icon: Sliders, tag: 'Automated', time: '1-2 Weeks', features: ['Global timezone converter', 'Custom blackout date locks', 'Min/Max notice limits'] },
            { title: 'Automated Deposit & Payment System', desc: 'Collect partial prepayments or full fees at booking.', icon: CreditCard, tag: 'High ROI', time: '1-2 Weeks', features: ['Partial deposit collection', 'Automated refund on cancel', 'Saved card vault'] },
            { title: 'Google & Apple Calendar Sync', desc: 'Two-way calendar sync for staff and customers.', icon: Zap, tag: 'Sync Engine', time: '1-2 Weeks', features: ['2-way iCal & Google sync', 'Instant event invitation .ics', 'Auto meeting link generator'] },
            { title: 'Automated Reminders & SMS', desc: 'Reduce no-shows with scheduled SMS/WhatsApp reminders.', icon: Shield, tag: 'Retention', time: '1 Week', features: ['24hr & 1hr WhatsApp pings', '1-click confirmation response', 'Directions map link embed'] },
            { title: 'Staff Schedule & Payroll Manager', desc: 'Manage shift schedules and calculate booking commissions.', icon: Users, tag: 'Management', time: '2 Weeks', features: ['Staff commission auto-calc', 'Shift rotation builder', 'Individual staff payouts'] },
        ],
    },
];

export default function SolutionExplorer() {
    const [selectedSector, setSelectedSector] = useState('all');
    const [selectedId, setSelectedId] = useState('textile');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTagFilter, setSelectedTagFilter] = useState('All');
    const [viewMode, setViewMode] = useState('grid');
    const [activeModalSolution, setActiveModalSolution] = useState(null);

    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const navigate = useNavigate();

    // Filter categories based on selected sector
    const visibleCategories = useMemo(() => {
        if (selectedSector === 'all') return categories;
        return categories.filter((c) => c.sector === selectedSector);
    }, [selectedSector]);

    // Handle sector change
    const handleSectorChange = (sectorId) => {
        setSelectedSector(sectorId);
        const firstCat = sectorId === 'all'
            ? categories[0]
            : categories.find((c) => c.sector === sectorId) || categories[0];
        if (firstCat) setSelectedId(firstCat.id);
    };

    // Current active category object
    const activeCategory = categories.find((c) => c.id === selectedId) || visibleCategories[0] || categories[0];

    // Filter solutions by selected tag filter
    const displayedCategorySolutions = useMemo(() => {
        if (selectedTagFilter === 'All') return activeCategory.solutions;
        return activeCategory.solutions.filter(sol => 
            sol.tag && sol.tag.toLowerCase().includes(selectedTagFilter.toLowerCase())
        );
    }, [activeCategory, selectedTagFilter]);

    // Global search matching solutions
    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const query = searchQuery.toLowerCase().trim();
        const results = [];

        categories.forEach((cat) => {
            cat.solutions.forEach((sol) => {
                const matchesTitle = sol.title.toLowerCase().includes(query);
                const matchesDesc = sol.desc.toLowerCase().includes(query);
                const matchesCategory = cat.label.toLowerCase().includes(query);
                const matchesTag = sol.tag ? sol.tag.toLowerCase().includes(query) : false;

                if (matchesTitle || matchesDesc || matchesCategory || matchesTag) {
                    results.push({
                        ...sol,
                        categoryLabel: cat.label,
                        categoryId: cat.id,
                        categoryIcon: cat.icon,
                    });
                }
            });
        });

        return results;
    }, [searchQuery]);

    const handleRequestQuote = (solTitle, categoryName) => {
        setActiveModalSolution(null);
        navigate(`/contact?solution=${encodeURIComponent(solTitle)}&category=${encodeURIComponent(categoryName)}`);
    };

    return (
        <section className={`w-full py-20 relative overflow-hidden border-b z-10 transition-colors duration-300 ${
            isDark ? 'bg-black border-white/10' : 'bg-slate-50 border-slate-200'
        }`}>
            {/* Ambient Glowing Background Orbs */}
            <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center space-x-2 mb-3">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                        </span>
                        <span className={`text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full border ${
                            isDark ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : 'text-cyan-700 bg-cyan-100/90 border-cyan-300'
                        }`}>
                            EXPLORE SOLUTIONS DIRECTORY
                        </span>
                    </div>

                    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        What are you looking to <span className={isDark ? 'text-gradient-neon' : 'text-gradient-neon'}>build?</span>
                    </h2>
                    
                    <p className={`text-base sm:text-lg font-medium mt-3 leading-relaxed ${
                        isDark ? 'text-gray-400' : 'text-slate-700'
                    }`}>
                        Browse 90+ battle-tested modules across 15 industries.
                    </p>
                </div>

                {/* SINGLE UNIFIED CONTROL BAR (Search + Jump Dropdown + View Switcher) */}
                <div className="max-w-4xl mx-auto mb-10">
                    <div className={`p-2 rounded-2xl border flex flex-col sm:flex-row items-center gap-3 backdrop-blur-xl transition-all duration-300 ${
                        isDark
                            ? 'bg-white/[0.04] border-white/15 shadow-2xl'
                            : 'bg-white border-slate-300 shadow-xl shadow-slate-200/60'
                    }`}>
                        {/* Live Search Input */}
                        <div className="relative flex-grow w-full flex items-center">
                            <Search className={`w-5 h-5 ml-3 mr-2 shrink-0 ${isDark ? 'text-gray-400' : 'text-slate-400'}`} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search 90+ solutions (e.g., 'ERP', 'POS', 'Booking', 'Mobile')..."
                                className={`w-full py-2.5 pr-8 text-sm font-medium bg-transparent border-none outline-none focus:outline-none focus:ring-0 ${
                                    isDark ? 'text-white placeholder-gray-500' : 'text-slate-900 placeholder-slate-400'
                                }`}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className={`mr-2 p-1 rounded-full transition-colors ${
                                        isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500'
                                    }`}
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center space-x-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                            {/* Industry Quick Jump Selector */}
                            <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                                <select
                                    value={selectedId}
                                    onChange={(e) => {
                                        setSearchQuery('');
                                        const cat = categories.find(c => c.id === e.target.value);
                                        if (cat) {
                                            setSelectedSector(cat.sector);
                                            setSelectedId(cat.id);
                                        }
                                    }}
                                    className={`w-full appearance-none pl-3 pr-8 py-2 rounded-xl border text-xs font-bold outline-none cursor-pointer transition-all ${
                                        isDark
                                            ? 'bg-black border-white/20 text-cyan-300 focus:border-cyan-400'
                                            : 'bg-slate-100 border-slate-300 text-slate-900 focus:border-cyan-600'
                                    }`}
                                >
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id} className={isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}>
                                            {cat.label} ({cat.solutions.length})
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="w-4 h-4 text-cyan-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>

                            {/* View Switcher (Grid vs List) */}
                            <div className="flex items-center space-x-1 p-1 rounded-xl border bg-white/5 shrink-0">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-colors ${
                                        viewMode === 'grid'
                                            ? isDark ? 'bg-cyan-500 text-black font-bold' : 'bg-cyan-600 text-white font-bold'
                                            : isDark ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                    title="Grid View"
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-colors ${
                                        viewMode === 'list'
                                            ? isDark ? 'bg-cyan-500 text-black font-bold' : 'bg-cyan-600 text-white font-bold'
                                            : isDark ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                    title="Compact List View"
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEARCH RESULTS MODE */}
                {searchQuery.trim() !== '' ? (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Sparkles className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                                <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                                    Found <span className="font-bold text-cyan-500">{searchResults.length}</span> matching solution{searchResults.length === 1 ? '' : 's'} for "<span className="italic">{searchQuery}</span>"
                                </span>
                            </div>
                            <button
                                onClick={() => setSearchQuery('')}
                                className={`text-xs font-bold underline underline-offset-4 transition-colors ${
                                    isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-700 hover:text-cyan-900'
                                }`}
                            >
                                Clear Search
                            </button>
                        </div>

                        {searchResults.length === 0 ? (
                            <div className={`p-12 text-center rounded-3xl border ${
                                isDark ? 'bg-white/[0.02] border-white/10 text-gray-400' : 'bg-white border-slate-200 text-slate-600'
                            }`}>
                                <Search className="w-12 h-12 mx-auto mb-3 opacity-40" />
                                <p className="text-base font-semibold">No solutions matched your search.</p>
                                <p className="text-xs mt-1 opacity-70">Try searching for broader terms like "Billing", "Payment", "Inventory", or "Mobile".</p>
                            </div>
                        ) : viewMode === 'grid' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {searchResults.map((sol) => {
                                    const SolIcon = sol.icon;
                                    const CategoryIcon = sol.categoryIcon;
                                    return (
                                        <motion.div
                                            key={`${sol.categoryId}-${sol.title}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                                                isDark
                                                    ? 'bg-black/50 border-white/10 hover:border-cyan-400/50 hover:bg-black/80 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]'
                                                    : 'bg-white border-slate-200/90 hover:border-cyan-600 hover:shadow-xl hover:shadow-cyan-600/10'
                                            }`}
                                            onClick={() => setActiveModalSolution({ ...sol, categoryName: sol.categoryLabel })}
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className={`inline-flex items-center space-x-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                                                        isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                                                    }`}>
                                                        <CategoryIcon className="w-3.5 h-3.5 text-cyan-500" />
                                                        <span>{sol.categoryLabel}</span>
                                                    </span>
                                                    {sol.tag && (
                                                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                                                            isDark ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-100 text-cyan-800'
                                                        }`}>
                                                            {sol.tag}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 transition-all duration-300 ${
                                                    isDark
                                                        ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black'
                                                        : 'bg-cyan-100/70 border-cyan-200 text-cyan-700 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white'
                                                }`}>
                                                    <SolIcon className="w-5 h-5" />
                                                </div>

                                                <h3 className={`text-lg font-bold mb-2 transition-colors ${
                                                    isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
                                                }`}>
                                                    {sol.title}
                                                </h3>

                                                <p className={`text-xs leading-relaxed font-normal mb-4 ${
                                                    isDark ? 'text-gray-400' : 'text-slate-600'
                                                }`}>
                                                    {sol.desc}
                                                </p>
                                            </div>

                                            <div className={`pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                                                isDark ? 'border-white/10 text-gray-400' : 'border-slate-100 text-slate-500'
                                            }`}>
                                                <span className="flex items-center space-x-1">
                                                    <Clock className="w-3.5 h-3.5 text-cyan-500" />
                                                    <span>{sol.time || '1-2 Weeks'}</span>
                                                </span>
                                                <span className={`flex items-center space-x-1 transition-transform group-hover:translate-x-1 ${
                                                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                                                }`}>
                                                    <span>Details</span>
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {searchResults.map((sol) => {
                                    const SolIcon = sol.icon;
                                    return (
                                        <div
                                            key={`${sol.categoryId}-${sol.title}`}
                                            onClick={() => setActiveModalSolution({ ...sol, categoryName: sol.categoryLabel })}
                                            className={`p-4 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 cursor-pointer ${
                                                isDark
                                                    ? 'bg-black/40 border-white/10 hover:border-cyan-400/50 hover:bg-black/70'
                                                    : 'bg-white border-slate-200 hover:border-cyan-600 hover:shadow-md'
                                            }`}
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                                                    isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                                                }`}>
                                                    <SolIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center space-x-2">
                                                        <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                                            {sol.title}
                                                        </h3>
                                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                                            {sol.categoryLabel}
                                                        </span>
                                                    </div>
                                                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                                        {sol.desc}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between md:justify-end space-x-4 shrink-0 text-xs font-semibold">
                                                <span className="flex items-center space-x-1 text-gray-400">
                                                    <Clock className="w-3.5 h-3.5 text-cyan-500" />
                                                    <span>{sol.time}</span>
                                                </span>
                                                <button className={`px-4 py-2 rounded-xl border transition-colors ${
                                                    isDark
                                                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black'
                                                        : 'bg-cyan-600 text-white hover:bg-cyan-700'
                                                }`}>
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ) : (
                    /* CATEGORY BROWSER MODE */
                    <>
                        {/* Sector Tabs (Row 1 of Navigation) */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                            {sectors.map((sec) => {
                                const isSelected = sec.id === selectedSector;
                                return (
                                    <button
                                        key={sec.id}
                                        onClick={() => handleSectorChange(sec.id)}
                                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                                            isSelected
                                                ? isDark
                                                    ? 'bg-cyan-500 text-black font-extrabold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                                                    : 'bg-cyan-700 text-white font-extrabold shadow-md'
                                                : isDark
                                                    ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                                                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                                        }`}
                                    >
                                        {sec.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Clean Contextual Category Pills (Row 2 of Navigation - Fits in 1 neat centered row!) */}
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto">
                            {visibleCategories.map((cat) => {
                                const Icon = cat.icon;
                                const isSelected = cat.id === selectedId;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedId(cat.id)}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-300 ${
                                            isSelected
                                                ? isDark
                                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold shadow-[0_0_20px_rgba(0,240,255,0.35)] border border-cyan-400/50 scale-105'
                                                    : 'bg-cyan-600 text-white font-extrabold shadow-md shadow-cyan-600/30 scale-105'
                                                : isDark
                                                    ? 'bg-white/[0.03] text-gray-300 border border-white/10 hover:border-cyan-500/40 hover:text-white hover:bg-white/[0.08]'
                                                    : 'bg-white text-slate-800 border border-slate-300 shadow-sm hover:border-cyan-600 hover:text-cyan-700 hover:bg-slate-50'
                                        }`}
                                    >
                                        <Icon className={`w-3.5 h-3.5 ${
                                            isSelected ? 'text-white' : isDark ? 'text-cyan-400' : 'text-cyan-600'
                                        }`} />
                                        <span>{cat.label}</span>
                                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                                            isSelected ? 'bg-white/20 text-white' : isDark ? 'bg-white/10 text-gray-400' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                            {cat.solutions.length}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Solutions Main Panel */}
                        <div className={`border rounded-3xl p-6 sm:p-10 backdrop-blur-2xl transition-colors duration-300 ${
                            isDark ? 'bg-white/[0.02] border-white/10' : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'
                        }`}>
                            {/* Panel Header with Tag Filters Inline */}
                            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b ${
                                isDark ? 'border-white/10' : 'border-slate-200'
                            }`}>
                                <div className="flex items-center space-x-3">
                                    <div className={`p-2.5 rounded-xl border ${
                                        isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700 border-cyan-200'
                                    }`}>
                                        <activeCategory.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            {activeCategory.label} Solutions
                                        </h3>
                                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                                            {displayedCategorySolutions.length} ready-to-deploy modules
                                        </p>
                                    </div>
                                </div>

                                {/* Inline Tag Filters */}
                                <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
                                    {tagFilters.map(tag => {
                                        const isSelected = selectedTagFilter === tag;
                                        return (
                                            <button
                                                key={tag}
                                                onClick={() => setSelectedTagFilter(tag)}
                                                className={`text-xs font-bold px-3 py-1 rounded-full border transition-all ${
                                                    isSelected
                                                        ? isDark
                                                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                                                            : 'bg-cyan-600 text-white border-cyan-600'
                                                        : isDark
                                                            ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                                                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                                                }`}
                                            >
                                                {tag}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Render Solutions Grid or List */}
                            {viewMode === 'grid' ? (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCategory.id + selectedTagFilter}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                    >
                                        {displayedCategorySolutions.map((sol) => {
                                            const SolIcon = sol.icon;
                                            return (
                                                <div
                                                    key={sol.title}
                                                    onClick={() => setActiveModalSolution({ ...sol, categoryName: activeCategory.label })}
                                                    className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                                                        isDark
                                                            ? 'bg-black/40 border-white/10 hover:border-cyan-400/50 hover:bg-black/70 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]'
                                                            : 'bg-slate-50 border-slate-200/90 hover:border-cyan-500 hover:bg-white hover:shadow-xl hover:shadow-cyan-600/10'
                                                    }`}
                                                >
                                                    <div>
                                                        <div className="flex items-center justify-between mb-4">
                                                            <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                                                                isDark
                                                                    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black'
                                                                    : 'bg-cyan-100/70 border-cyan-200 text-cyan-700 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white'
                                                            }`}>
                                                                <SolIcon className="w-5 h-5" />
                                                            </div>

                                                            {sol.tag && (
                                                                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                                                                    isDark
                                                                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                                                                        : 'bg-cyan-100 text-cyan-800 border-cyan-200'
                                                                }`}>
                                                                    {sol.tag}
                                                                </span>
                                                            )}
                                                        </div>

                                                        <h3 className={`text-lg font-bold mb-2 transition-colors ${
                                                            isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
                                                        }`}>
                                                            {sol.title}
                                                        </h3>

                                                        <p className={`text-xs leading-relaxed font-normal mb-4 ${
                                                            isDark ? 'text-gray-400' : 'text-slate-600'
                                                        }`}>
                                                            {sol.desc}
                                                        </p>

                                                        {sol.features && (
                                                            <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
                                                                {sol.features.slice(0, 2).map((f, i) => (
                                                                    <div key={i} className="flex items-center space-x-2 text-[11px] font-medium text-gray-300">
                                                                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                                                                        <span className="truncate">{f}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className={`pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                                                        isDark ? 'border-white/10 text-gray-400' : 'border-slate-200 text-slate-500'
                                                    }`}>
                                                        <span className="flex items-center space-x-1.5">
                                                            <Clock className="w-3.5 h-3.5 text-cyan-500" />
                                                            <span>Est. {sol.time || '1-2 Weeks'}</span>
                                                        </span>

                                                        <span className={`flex items-center space-x-1 font-bold transition-transform group-hover:translate-x-1 ${
                                                            isDark ? 'text-cyan-400' : 'text-cyan-600'
                                                        }`}>
                                                            <span>View Details</span>
                                                            <ArrowRight className="w-3.5 h-3.5" />
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                <div className="space-y-3">
                                    {displayedCategorySolutions.map((sol) => {
                                        const SolIcon = sol.icon;
                                        return (
                                            <div
                                                key={sol.title}
                                                onClick={() => setActiveModalSolution({ ...sol, categoryName: activeCategory.label })}
                                                className={`p-4 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 cursor-pointer ${
                                                    isDark
                                                        ? 'bg-black/40 border-white/10 hover:border-cyan-400/50 hover:bg-black/70'
                                                        : 'bg-slate-50 border-slate-200/90 hover:border-cyan-500 hover:bg-white hover:shadow-md'
                                                }`}
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                                                        isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                                                    }`}>
                                                        <SolIcon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2">
                                                            <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                                                {sol.title}
                                                            </h3>
                                                            {sol.tag && (
                                                                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                                                    {sol.tag}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                                            {sol.desc}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between md:justify-end space-x-4 shrink-0 text-xs font-semibold">
                                                    <span className="flex items-center space-x-1 text-gray-400">
                                                        <Clock className="w-3.5 h-3.5 text-cyan-500" />
                                                        <span>{sol.time}</span>
                                                    </span>
                                                    <button className={`px-4 py-2 rounded-xl border transition-colors ${
                                                        isDark
                                                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black'
                                                            : 'bg-cyan-600 text-white hover:bg-cyan-700'
                                                    }`}>
                                                        View Module
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* SOLUTION QUICK-DETAIL MODAL */}
            <AnimatePresence>
                {activeModalSolution && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveModalSolution(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        {/* Modal Dialog Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className={`relative w-full max-w-lg rounded-3xl border p-6 sm:p-8 shadow-2xl z-10 ${
                                isDark ? 'bg-slate-950 border-white/20 text-white' : 'bg-white border-slate-200 text-slate-900'
                            }`}
                        >
                            <button
                                onClick={() => setActiveModalSolution(null)}
                                className={`absolute top-5 right-5 p-2 rounded-full border transition-colors ${
                                    isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-600'
                                }`}
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="flex items-center space-x-3 mb-4">
                                <div className={`p-3 rounded-2xl border ${
                                    isDark ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-cyan-100 border-cyan-300 text-cyan-700'
                                }`}>
                                    <activeModalSolution.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className={`text-[11px] font-extrabold uppercase tracking-wider ${
                                        isDark ? 'text-cyan-400' : 'text-cyan-700'
                                    }`}>
                                        {activeModalSolution.categoryName}
                                    </span>
                                    <h3 className="text-xl font-bold leading-tight">
                                        {activeModalSolution.title}
                                    </h3>
                                </div>
                            </div>

                            <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                                {activeModalSolution.desc}
                            </p>

                            {/* Features list */}
                            {activeModalSolution.features && (
                                <div className="mb-6">
                                    <h4 className={`text-xs font-extrabold uppercase tracking-wider mb-3 ${
                                        isDark ? 'text-gray-400' : 'text-slate-500'
                                    }`}>
                                        Key Core Capabilities
                                    </h4>
                                    <div className="space-y-2.5">
                                        {activeModalSolution.features.map((feat, i) => (
                                            <div key={i} className="flex items-start space-x-2.5 text-xs font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                                                <span className={isDark ? 'text-gray-200' : 'text-slate-800'}>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Timeline & Delivery */}
                            <div className={`p-3.5 rounded-xl border flex items-center justify-between mb-6 text-xs ${
                                isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}>
                                <span className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4 text-cyan-500" />
                                    <span>Estimated Delivery Timeline:</span>
                                </span>
                                <span className="font-extrabold text-cyan-500">{activeModalSolution.time || '1-2 Weeks'}</span>
                            </div>

                            {/* CTA Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => handleRequestQuote(activeModalSolution.title, activeModalSolution.categoryName)}
                                    className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all duration-300 shadow-md ${
                                        isDark
                                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:brightness-110 shadow-cyan-500/20'
                                            : 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-cyan-600/30'
                                    }`}
                                >
                                    <span>Get Quote for this Solution</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                <button
                                    onClick={() => setActiveModalSolution(null)}
                                    className={`w-full sm:w-auto py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm transition-colors border ${
                                        isDark
                                            ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                                            : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
