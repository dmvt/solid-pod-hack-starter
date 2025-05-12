<script>
  // A simple component to test HMR
  import { onMount } from 'svelte';
  
  let timestamp = new Date().toLocaleTimeString();
  
  // Update the timestamp every second to show component is active
  onMount(() => {
    const interval = setInterval(() => {
      timestamp = new Date().toLocaleTimeString();
    }, 1000);
    
    return () => clearInterval(interval);
  });
</script>

<div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col items-center my-8">
  <h2 class="text-xl font-bold text-gray-900 mb-2">HMR Test Component</h2>
  
  <p class="text-gray-600 mb-4">
    Edit this file and save to see HMR in action.
    The changes should appear without a full page reload.
  </p>
  
  <div class="text-sm text-gray-500">
    Current time: <span class="font-mono">{timestamp}</span>
  </div>
  
  <!-- Try editing this color or text to test HMR -->
  <div class="mt-4 p-3 bg-blue-100 text-blue-800 rounded-lg">
    Edit me to test Hot Module Replacement!
  </div>
</div>