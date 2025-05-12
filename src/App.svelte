<script>
  import { env } from './config/env.js';

  let message = "Svelte 5 + Tailwind CSS + Solid PODs";
  let appName = env.APP_NAME;
  let podServer = env.SOLID_POD_SERVER;
  let isDev = env.IS_DEV;
  let apiTimeout = env.API_TIMEOUT;
</script>

<main class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
      {message}
    </h1>
    <p class="text-center text-gray-600 mb-4">
      Docker setup is working correctly!
    </p>

    <div class="bg-blue-50 p-4 rounded-md mb-4">
      <h2 class="font-semibold text-blue-900 mb-2">Environment Configuration</h2>
      <p class="text-sm text-blue-800">
        The local Solid Pod server is running at: <span class="font-mono">{podServer}</span>
      </p>
    </div>

    <div class="border border-gray-200 rounded-md p-4">
      <h2 class="font-semibold text-gray-700 mb-2">Environment Variables</h2>
      <ul class="text-sm space-y-2">
        <li class="flex justify-between">
          <span class="font-medium">App Name:</span>
          <span class="font-mono">{appName}</span>
        </li>
        <li class="flex justify-between">
          <span class="font-medium">Environment:</span>
          <span class="font-mono">{isDev ? 'Development' : 'Production'}</span>
        </li>
        <li class="flex justify-between">
          <span class="font-medium">API Timeout:</span>
          <span class="font-mono">{apiTimeout}ms</span>
        </li>
      </ul>
    </div>
  </div>
</main>