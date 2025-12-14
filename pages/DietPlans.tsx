import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Calculator, 
  Activity, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  User, 
  ClipboardList, 
  TrendingUp, 
  AlertCircle,
  Dumbbell
} from 'lucide-react';
import Button from '../components/Button';

// --- Types & Mock Data ---

interface DietPlan {
  id: string;
  name: string;
  tier: 'Silver' | 'Gold' | 'Platinum';
  goal: string;
  duration: string;
  features: string[];
  recommendedFor: string[];
  sampleMenu: {
    breakfast: string;
    lunch: string;
    snack: string;
    dinner: string;
  };
}

const DIET_PLANS: DietPlan[] = [
  {
    id: 'silver',
    name: 'Silver',
    tier: 'Silver',
    goal: 'Maintenance & Wellness',
    duration: '45 Days',
    features: ['Balanced Macro Split', 'Hydration Tracking', 'Weekly Cheat Meal Guide'],
    recommendedFor: ['Normal'],
    sampleMenu: { 
      breakfast: 'Oatmeal with Blueberries & Honey', 
      lunch: 'Grilled Chicken Caesar Salad (Light Dressing)', 
      snack: 'Handful of Almonds & Green Apple', 
      dinner: 'Steamed White Fish with Quinoa & Asparagus' 
    }
  },
  {
    id: 'gold',
    name: 'Gold',
    tier: 'Gold',
    goal: 'Muscle Gain & Strength',
    duration: '60 Days',
    features: ['High Protein Focus (2g/kg)', 'Pre/Post-workout Nutrition', 'Creatine Loading Phase'],
    recommendedFor: ['Underweight'],
    sampleMenu: { 
      breakfast: '6 Egg Whites + 2 Whole Eggs, Wholegrain Toast', 
      lunch: 'Lean Beef Stir-fry with Brown Rice', 
      snack: 'Whey Protein Shake + Banana', 
      dinner: 'Grilled Chicken Breast, Sweet Potato, Broccoli' 
    }
  },
  {
    id: 'platinum',
    name: 'Platinum',
    tier: 'Platinum',
    goal: 'Weight Loss & Definition',
    duration: '90 Days',
    features: ['Carb Cycling Protocol', 'Intermittent Fasting Options', 'Metabolic Detox Weekends'],
    recommendedFor: ['Overweight', 'Obese'],
    sampleMenu: { 
      breakfast: 'Green Smoothie (Spinach, Apple, Ginger, Protein)', 
      lunch: 'Tofu & Quinoa Buddha Bowl', 
      snack: 'Celery Sticks with Hummus', 
      dinner: 'Baked Salmon with Lemon & Zucchini Noodles' 
    }
  }
];

interface AssignFormInputs {
  customerName: string;
  customerEmail: string;
  planId: string;
  notes: string;
}

const DietPlans: React.FC = () => {
  // BMI State
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>('');
  const [recommendedPlan, setRecommendedPlan] = useState<DietPlan | null>(null);

  // UI State
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [assignSuccess, setAssignSuccess] = useState(false);

  // Form
  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<AssignFormInputs>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const heightInMeters = h / 100;
      const bmiValue = w / (heightInMeters * heightInMeters);
      const roundedBmi = parseFloat(bmiValue.toFixed(1));
      setBmi(roundedBmi);

      let category = '';
      let targetTier = '';

      if (roundedBmi < 18.5) {
        category = 'Underweight';
        targetTier = 'Gold'; // Suggest bulking
      } else if (roundedBmi >= 18.5 && roundedBmi < 24.9) {
        category = 'Normal Weight';
        targetTier = 'Silver'; // Suggest maintenance
      } else if (roundedBmi >= 25 && roundedBmi < 29.9) {
        category = 'Overweight';
        targetTier = 'Platinum'; // Suggest shred
      } else {
        category = 'Obese';
        targetTier = 'Platinum'; // Suggest shred
      }

      setBmiCategory(category);
      const plan = DIET_PLANS.find(p => p.tier === targetTier) || DIET_PLANS[0];
      setRecommendedPlan(plan);
      setValue('planId', plan.id);
    }
  };

  const onAssignSubmit = async (data: AssignFormInputs) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Assigned Plan Data:", data);
    setAssignSuccess(true);
    reset();
    setTimeout(() => setAssignSuccess(false), 5000);
  };

  const getBmiColor = (cat: string) => {
    switch (cat) {
      case 'Underweight': return 'text-blue-400';
      case 'Normal Weight': return 'text-green-400';
      case 'Overweight': return 'text-orange-400';
      case 'Obese': return 'text-red-500';
      default: return 'text-white';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. Header / Intro */}
      <section className="pt-24 pb-12 px-4 container mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Diet Plans & <span className="text-gold">Recommendations</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Advanced BMI-based analysis to personalize nutrition. Assign, track, and manage customer diet journeys with precision.
          </p>
          <div className="mt-6 inline-block px-4 py-1 bg-white/5 border border-gold/30 rounded-full text-gold text-xs font-bold uppercase tracking-widest">
            Prototype / Demo Mode
          </div>
        </motion.div>
      </section>

      {/* 2. BMI Calculator Section */}
      <section className="py-12 px-4 container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-premium-dark border border-gold/30 p-8 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.05)]">
          <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
            <Calculator className="text-gold" size={24} />
            <h2 className="text-2xl font-heading font-bold">BMI Intelligence Engine</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Input Side */}
            <div className="w-full md:w-1/2 space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Height (cm)</label>
                <input 
                  type="number" 
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g. 175"
                  className="w-full bg-black border border-white/10 p-3 rounded text-white focus:border-gold outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Weight (kg)</label>
                <input 
                  type="number" 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 70"
                  className="w-full bg-black border border-white/10 p-3 rounded text-white focus:border-gold outline-none transition-colors"
                />
              </div>
              <Button onClick={calculateBMI} fullWidth>Calculate BMI</Button>
            </div>

            {/* Result Side */}
            <div className="w-full md:w-1/2 bg-black/50 p-6 rounded-lg border border-white/5 min-h-[220px] flex flex-col justify-center items-center text-center relative overflow-hidden">
               {bmi ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="relative z-10"
                 >
                   <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Your BMI Score</p>
                   <div className="text-6xl font-heading font-bold text-white mb-2">{bmi}</div>
                   <div className={`text-xl font-bold ${getBmiColor(bmiCategory)} px-4 py-1 rounded-full bg-white/5 inline-block border border-white/10`}>
                     {bmiCategory}
                   </div>
                 </motion.div>
               ) : (
                 <div className="text-gray-500 flex flex-col items-center">
                   <Activity size={40} className="mb-3 opacity-30" />
                   <p className="text-sm">Enter metrics to calculate</p>
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Recommended Plan Section */}
      <AnimatePresence>
        {recommendedPlan && (
          <section className="py-8 px-4 container mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-4xl mx-auto bg-gradient-to-r from-premium-dark to-black border border-gold p-8 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.15)] flex flex-col md:flex-row items-center justify-between gap-6"
             >
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gold mb-2">
                    <Dumbbell size={20} />
                    <span className="font-bold uppercase tracking-widest text-xs">Recommended for you</span>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">{recommendedPlan.name}</h3>
                  <p className="text-gray-400">
                    Based on a BMI of <span className="text-white font-bold">{bmi}</span> ({bmiCategory}), this plan is optimized for your goals.
                  </p>
                </div>
                <Button 
                   onClick={() => document.getElementById(`plan-${recommendedPlan.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                   variant="outline"
                   className="shrink-0"
                >
                  View Details
                </Button>
             </motion.div>
          </section>
        )}
      </AnimatePresence>

      {/* 4. Available Diet Plans Grid */}
      <section className="py-16 px-4 container mx-auto">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold">Expert Diet Protocols</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {DIET_PLANS.map((plan) => {
              const isRecommended = recommendedPlan?.id === plan.id;
              return (
                <motion.div 
                  key={plan.id}
                  id={`plan-${plan.id}`}
                  whileHover={{ y: -5 }}
                  className={`bg-premium-dark border ${isRecommended ? 'border-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'border-white/10'} rounded-xl overflow-hidden flex flex-col`}
                >
                  <div className="p-6 border-b border-white/5 bg-black/20">
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="text-xl font-heading font-bold text-white">{plan.name}</h3>
                       {isRecommended && <CheckCircle size={20} className="text-gold" />}
                    </div>
                    <div className="text-sm text-gray-400 mb-1"><strong className="text-gold">Goal:</strong> {plan.goal}</div>
                    <div className="text-sm text-gray-400"><strong className="text-gold">Duration:</strong> {plan.duration}</div>
                  </div>
                  
                  <div className="p-6 flex-1">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Menu */}
                    <button 
                      onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                      className="w-full flex items-center justify-between p-3 bg-white/5 rounded hover:bg-white/10 transition-colors text-sm text-gray-300 mb-6"
                    >
                      <span>Sample Menu</span>
                      {expandedPlan === plan.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    
                    <AnimatePresence>
                      {expandedPlan === plan.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mb-6"
                        >
                          <div className="space-y-2 text-xs text-gray-400 pl-2 border-l-2 border-gold/30">
                            <p><strong className="text-gray-200">B:</strong> {plan.sampleMenu.breakfast}</p>
                            <p><strong className="text-gray-200">L:</strong> {plan.sampleMenu.lunch}</p>
                            <p><strong className="text-gray-200">S:</strong> {plan.sampleMenu.snack}</p>
                            <p><strong className="text-gray-200">D:</strong> {plan.sampleMenu.dinner}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button 
                      onClick={() => {
                        setValue('planId', plan.id);
                        document.getElementById('assign-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      fullWidth 
                      variant="primary"
                    >
                      Select Plan
                    </Button>
                  </div>
                </motion.div>
              );
            })}
         </div>
      </section>

      {/* 5. Assign Plan - DPM Demo */}
      <section id="assign-section" className="py-16 px-4 bg-premium-dark/50 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <ClipboardList className="text-gold" size={28} />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Diet Plan Manager (DPM)</h2>
          </div>

          <div className="bg-black border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden">
             {assignSuccess && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center text-center p-6"
                >
                  <CheckCircle size={64} className="text-gold mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Plan Assigned Successfully</h3>
                  <p className="text-gray-400 mb-6">The verified diet protocol has been linked to the customer profile.</p>
                  <div className="text-xs uppercase tracking-widest text-gold border border-gold px-3 py-1 rounded">Demo Status: Completed</div>
                  <button onClick={() => setAssignSuccess(false)} className="mt-8 text-sm text-gray-500 hover:text-white underline">Assign Another</button>
                </motion.div>
             )}

             <form onSubmit={handleSubmit(onAssignSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="col-span-1 md:col-span-2 mb-2">
                   <p className="text-gray-400 text-sm">Assign a diet plan to a registered customer. This action will trigger the nutrition delivery workflow.</p>
                </div>

                <div>
                   <label className="block text-xs font-bold text-gold uppercase tracking-widest mb-2">Customer Name</label>
                   <div className="relative">
                      <User size={16} className="absolute left-3 top-3.5 text-gray-500" />
                      <input 
                        {...register('customerName', { required: true })}
                        className="w-full bg-premium-dark border border-white/10 pl-10 pr-4 py-3 rounded text-white focus:border-gold outline-none text-sm"
                        placeholder="John Smith"
                      />
                   </div>
                   {errors.customerName && <span className="text-red-500 text-xs">Required</span>}
                </div>

                <div>
                   <label className="block text-xs font-bold text-gold uppercase tracking-widest mb-2">Contact Email</label>
                   <input 
                     {...register('customerEmail', { required: true })}
                     className="w-full bg-premium-dark border border-white/10 px-4 py-3 rounded text-white focus:border-gold outline-none text-sm"
                     placeholder="john@example.com"
                   />
                   {errors.customerEmail && <span className="text-red-500 text-xs">Required</span>}
                </div>

                <div>
                   <label className="block text-xs font-bold text-gold uppercase tracking-widest mb-2">Select Plan Protocol</label>
                   <select 
                      {...register('planId')}
                      className="w-full bg-premium-dark border border-white/10 px-4 py-3 rounded text-white focus:border-gold outline-none text-sm appearance-none cursor-pointer"
                   >
                     {DIET_PLANS.map(p => <option key={p.id} value={p.id}>{p.name} ({p.tier})</option>)}
                   </select>
                </div>

                <div>
                   <label className="block text-xs font-bold text-gold uppercase tracking-widest mb-2">Manager Notes</label>
                   <input 
                     {...register('notes')}
                     className="w-full bg-premium-dark border border-white/10 px-4 py-3 rounded text-white focus:border-gold outline-none text-sm"
                     placeholder="Allergies, preferences, etc."
                   />
                </div>

                <div className="col-span-1 md:col-span-2 pt-4">
                  <Button type="submit" size="lg" disabled={isSubmitting} fullWidth>
                    {isSubmitting ? 'Verifying Protocol...' : 'Assign Plan (Demo)'}
                  </Button>
                </div>
             </form>
          </div>
        </div>
      </section>

      {/* 6. Mock Progress Tracking */}
      <section className="py-16 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-gray-400" size={24} />
            <h3 className="text-xl font-heading font-bold text-gray-300">Customer Progress Snapshot</h3>
          </div>
          
          <div className="bg-white/5 border border-white/5 rounded-xl p-6 relative overflow-hidden">
             {/* Watermark */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 text-6xl font-black text-white/5 whitespace-nowrap pointer-events-none">
                SAMPLE DATA
             </div>

             <div className="flex justify-between items-end mb-2 relative z-10">
                <div>
                   <div className="text-2xl font-bold text-white">Week 3 <span className="text-gray-500 text-lg font-normal">of 6</span></div>
                   <div className="text-gold text-sm font-medium">Gold Gains Protocol</div>
                </div>
                <div className="text-3xl font-bold text-white">42%</div>
             </div>
             <div className="w-full bg-black h-3 rounded-full overflow-hidden border border-white/10 relative z-10">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '42%' }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="h-full bg-gold"
                />
             </div>
             <div className="mt-4 flex gap-4 text-xs text-gray-500 relative z-10">
                <span className="flex items-center gap-1"><CheckCircle size={12} className="text-green-500"/> Adherence: 95%</span>
                <span className="flex items-center gap-1"><Activity size={12} className="text-blue-500"/> Workouts: 12/18</span>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Disclaimer */}
      <footer className="py-12 text-center px-4 border-t border-white/5">
         <div className="inline-flex items-center gap-2 text-gray-500 text-sm bg-black px-4 py-2 rounded-full border border-white/10">
            <AlertCircle size={16} />
            <span><strong>Prototype Disclaimer:</strong> No medical advice provided. System allows managers to assign protocols based on calculated BMI metrics.</span>
         </div>
      </footer>
    </div>
  );
};

export default DietPlans;