import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function About() {
  return (
    <AuthenticatedLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p className="mt-2 text-gray-700">This is a simple About page using Inertia.js + React.</p>
    </div>
     </AuthenticatedLayout>
  );
}
