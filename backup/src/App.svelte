<script>
  let message = "Svelte 5 + Tailwind CSS + Solid PODs";
</script>

<main class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
      {message}
    </h1>
    <p class="text-center text-gray-600 mb-4">
      Docker setup is working correctly!
    </p>
    <div class="bg-blue-50 p-4 rounded-md">
      <p class="text-sm text-blue-800">
        The local Solid Pod server is running on port 3000 and is available for authentication and data storage.
      </p>
    </div>
  </div>
</main>