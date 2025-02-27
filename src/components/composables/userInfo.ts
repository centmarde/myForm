import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabase';

export function useUserInfo() {
  const userEmail = ref('Guest');

  onMounted(async () => {
    try {
      const { data, error } = await supabase.auth.getUser();
    
      if (error) {
        throw error;
      }
    
      if (data.user) {
        userEmail.value = data.user.email || 'Guest';
      }
    } catch (error) {
      console.error('Error fetching user email:', error);
    }
  });

  return {
    userEmail,
  };
}