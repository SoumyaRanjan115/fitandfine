import React, { useState } from 'react';
import { SUCCESS_STORIES, PLANS, FAQS } from '../data/mockData';
import { Trash2, Edit, Plus, Users, CreditCard, HelpCircle } from 'lucide-react';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stories' | 'plans' | 'faqs'>('stories');
  
  const [stories, setStories] = useState(SUCCESS_STORIES);
  const [plans, setPlans] = useState(PLANS);
  const [faqs, setFaqs] = useState(FAQS);

  const handleDelete = (id: string, type: 'story' | 'plan' | 'faq') => {
    if (confirm('Are you sure you want to delete this item?')) {
      if (type === 'story') setStories(stories.filter(s => s.id !== id));
      if (type === 'plan') setPlans(plans.filter(p => p.id !== id));
      if (type === 'faq') setFaqs(faqs.filter(f => f.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-black p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-heading font-bold text-white">Admin <span className="text-gold">Dashboard</span></h1>
          <div className="text-sm text-gray-400">Welcome, Admin</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
           <div className="bg-premium-dark p-6 border border-white/10 flex items-center gap-4 shadow-lg">
             <div className="bg-white/5 p-3 rounded-none text-gold border border-gold/20"><Users /></div>
             <div>
               <div className="text-2xl font-bold text-white">1,234</div>
               <div className="text-xs uppercase tracking-widest text-gray-500">Active Members</div>
             </div>
           </div>
           <div className="bg-premium-dark p-6 border border-white/10 flex items-center gap-4 shadow-lg">
             <div className="bg-white/5 p-3 rounded-none text-gold border border-gold/20"><CreditCard /></div>
             <div>
               <div className="text-2xl font-bold text-white">₹8.4L</div>
               <div className="text-xs uppercase tracking-widest text-gray-500">Monthly Revenue</div>
             </div>
           </div>
           <div className="bg-white/5 p-6 border border-white/10 flex items-center gap-4 shadow-lg">
             <div className="bg-white/5 p-3 rounded-none text-gray-400 border border-white/10"><HelpCircle /></div>
             <div>
               <div className="text-2xl font-bold text-white">12</div>
               <div className="text-xs uppercase tracking-widest text-gray-500">Pending Inquiries</div>
             </div>
           </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-white/10 mb-8 overflow-x-auto">
          <button 
            className={`pb-4 px-4 font-medium whitespace-nowrap uppercase tracking-wider text-sm transition-colors ${activeTab === 'stories' ? 'text-gold border-b-2 border-gold' : 'text-gray-500 hover:text-gray-300'}`}
            onClick={() => setActiveTab('stories')}
          >
            Success Stories
          </button>
          <button 
            className={`pb-4 px-4 font-medium whitespace-nowrap uppercase tracking-wider text-sm transition-colors ${activeTab === 'plans' ? 'text-gold border-b-2 border-gold' : 'text-gray-500 hover:text-gray-300'}`}
            onClick={() => setActiveTab('plans')}
          >
            Subscription Plans
          </button>
          <button 
            className={`pb-4 px-4 font-medium whitespace-nowrap uppercase tracking-wider text-sm transition-colors ${activeTab === 'faqs' ? 'text-gold border-b-2 border-gold' : 'text-gray-500 hover:text-gray-300'}`}
            onClick={() => setActiveTab('faqs')}
          >
            FAQs
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-premium-dark border border-white/10 overflow-hidden">
          {activeTab === 'stories' && (
            <div className="p-8">
               <div className="flex justify-between mb-6">
                 <h3 className="font-bold text-lg text-white">Manage Stories</h3>
                 <button className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold bg-gold text-black px-4 py-2 hover:bg-white transition-colors"><Plus size={16}/> Add Story</button>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead className="bg-black text-gray-500 text-xs uppercase tracking-widest">
                     <tr>
                       <th className="p-4 border-b border-white/10">Name</th>
                       <th className="p-4 border-b border-white/10">Weight Loss</th>
                       <th className="p-4 border-b border-white/10 text-right">Actions</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                     {stories.map(story => (
                       <tr key={story.id} className="hover:bg-white/5 transition-colors">
                         <td className="p-4 font-medium text-gray-200">{story.name}</td>
                         <td className="p-4 text-gray-400">{story.beforeWeight - story.afterWeight}kg in {story.durationWeeks} wks</td>
                         <td className="p-4 text-right space-x-2">
                           <button className="text-gray-400 hover:text-gold p-2"><Edit size={16} /></button>
                           <button onClick={() => handleDelete(story.id, 'story')} className="text-gray-400 hover:text-red-500 p-2"><Trash2 size={16} /></button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          )}

          {activeTab === 'plans' && (
             <div className="p-8">
             <div className="flex justify-between mb-6">
               <h3 className="font-bold text-lg text-white">Manage Plans</h3>
               <button className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold bg-gold text-black px-4 py-2 hover:bg-white transition-colors"><Plus size={16}/> Add Plan</button>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead className="bg-black text-gray-500 text-xs uppercase tracking-widest">
                   <tr>
                     <th className="p-4 border-b border-white/10">Name</th>
                     <th className="p-4 border-b border-white/10">Price</th>
                     <th className="p-4 border-b border-white/10 text-right">Actions</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   {plans.map(plan => (
                     <tr key={plan.id} className="hover:bg-white/5 transition-colors">
                       <td className="p-4 font-medium text-gray-200">{plan.name}</td>
                       <td className="p-4 text-gold font-bold">₹{plan.price}</td>
                       <td className="p-4 text-right space-x-2">
                         <button className="text-gray-400 hover:text-gold p-2"><Edit size={16} /></button>
                         <button onClick={() => handleDelete(plan.id, 'plan')} className="text-gray-400 hover:text-red-500 p-2"><Trash2 size={16} /></button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>
          )}

          {activeTab === 'faqs' && (
            <div className="p-8">
            <div className="flex justify-between mb-6">
              <h3 className="font-bold text-lg text-white">Manage FAQs</h3>
              <button className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold bg-gold text-black px-4 py-2 hover:bg-white transition-colors"><Plus size={16}/> Add FAQ</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-black text-gray-500 text-xs uppercase tracking-widest">
                  <tr>
                    <th className="p-4 border-b border-white/10">Question</th>
                    <th className="p-4 border-b border-white/10 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {faqs.map(faq => (
                    <tr key={faq.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium text-gray-200 max-w-md truncate">{faq.question}</td>
                      <td className="p-4 text-right space-x-2">
                        <button className="text-gray-400 hover:text-gold p-2"><Edit size={16} /></button>
                        <button onClick={() => handleDelete(faq.id, 'faq')} className="text-gray-400 hover:text-red-500 p-2"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
         </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;