<script>
  // Main page component
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <main class="container mx-auto px-4">
    <section class="text-center">
      <div class="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Hello Solid Pod Hack 🚀</h1>
        <p class="text-xl md:text-2xl">
          A decentralized application with Svelte 5, Tailwind CSS, and Solid PODs
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-2xl font-bold text-blue-600 mb-3">Svelte 5</h2>
          <p class="text-gray-600">
            Built with the latest Svelte 5 features for reactive and efficient UI components.
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-2xl font-bold text-teal-600 mb-3">Tailwind CSS</h2>
          <p class="text-gray-600">
            Styled with utility-first Tailwind CSS for rapid and consistent design.
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-2xl font-bold text-purple-600 mb-3">Solid PODs</h2>
          <p class="text-gray-600">
            Integrated with Solid PODs for decentralized data storage and user identity.
          </p>
        </div>
      </div>
    </section>
  </main>
  
  <footer class="w-full mt-auto py-4 text-center text-gray-600">
    <p>Edit <code class="bg-gray-200 rounded px-1 py-0.5 text-sm">src/routes/+page.svelte</code> to test hot module reloading (HMR)</p>
  </footer>
</div>