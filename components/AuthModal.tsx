import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Modal from './Modal';
import Button from './Button';
import { LoginMode } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: LoginMode;
}

interface LoginFormInputs {
  email: string;
  password: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'USER' }) => {
  const [activeTab, setActiveTab] = useState<LoginMode>(initialMode);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (activeTab === 'ADMIN') {
      if (data.email === 'admin@fitlife.com' && data.password === 'admin') {
        onClose();
        navigate('/admin');
        reset();
      } else {
        alert('Invalid admin credentials. Try admin@fitlife.com / admin');
      }
    } else {
        alert(`Welcome back, ${data.email}!`);
        onClose();
        reset();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={activeTab === 'USER' ? 'Member Access' : 'Admin Portal'}>
      <div className="flex mb-8 bg-black p-1 border border-white/10">
        <button
          className={`flex-1 py-3 text-sm font-semibold transition-all uppercase tracking-wider ${
            activeTab === 'USER' ? 'bg-gold text-black shadow-lg' : 'text-gray-500 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('USER')}
        >
          User Login
        </button>
        <button
          className={`flex-1 py-3 text-sm font-semibold transition-all uppercase tracking-wider ${
            activeTab === 'ADMIN' ? 'bg-gold text-black shadow-lg' : 'text-gray-500 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('ADMIN')}
        >
          Admin Login
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gold uppercase tracking-widest mb-2">Email Address</label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
            })}
            className={`w-full px-4 py-3 bg-black border text-white focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all placeholder-gray-700 ${
              errors.email ? 'border-red-500' : 'border-white/10'
            }`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-gold uppercase tracking-widest mb-2">Password</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required', minLength: { value: 4, message: 'Min 4 characters' } })}
            className={`w-full px-4 py-3 bg-black border text-white focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all placeholder-gray-700 ${
              errors.password ? 'border-red-500' : 'border-white/10'
            }`}
            placeholder="••••••••"
          />
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
        </div>

        {activeTab === 'ADMIN' && (
           <p className="text-xs text-gray-500 italic">Hint: admin@fitlife.com / admin</p>
        )}

        <Button type="submit" fullWidth disabled={isSubmitting} size="lg">
          {isSubmitting ? 'Authenticating...' : activeTab === 'USER' ? 'Enter Dashboard' : 'Access Panel'}
        </Button>
      </form>
    </Modal>
  );
};

export default AuthModal;