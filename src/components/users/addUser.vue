<template>
  <div class="min-h-screen p-6 bg-white flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">
          Les informations de l'utilisateur
        </h2>
        <p class="text-gray-500 mb-6">Formulaire d'informations d'ajout d'un Utilisateur</p>

        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div
                class="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border"
              >
                <div class="flex flex-col justify-center flex-auto p-6 text-center">
                  <a href="/addModule">
                    <i class="mb-2 fa fa-2x fa-file-image text-slate-400"></i>
                    <h5 class="text-slate-400 font-medium text-md p-1">Photo Profil</h5>
                  </a>
                </div>
              </div>
           <!-- <div
              class="w-full h-auto bg-gray-400 bg-cover rounded-l-lg"
              style="
                background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
              "
            ></div>-->

            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-5">
                  <label for="full_name">Nom Complet</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                  />
                </div>

                <div class="md:col-span-3">
                  <label for="email">Adresse Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    placeholder="email@domain.com"
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="phone">Telephone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    placeholder=""
                  />
                </div>

                <div class="md:col-span-3">
                  <label for="address">Adresse /Ville</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    placeholder=""
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="genre">Genre</label>
                  <input
                    type="text"
                    name="genre"
                    id="genre"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    placeholder=""
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="mode">Mode</label>
                  <div
                    class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                  >
                    <input
                      name="mode"
                      id="mode"
                      placeholder="Free"
                      class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value=""
                    />
                    <button
                      tabindex="-1"
                      class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button
                      tabindex="-1"
                      for="show_more"
                      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="md:col-span-2">
                  <label for="zipcode">Date Fin</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                    value=""
                  />
                </div>

                <div class="md:col-span-1">
                  <label for="zipcode">Date Fin</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                    value=""
                  />
                </div>
              </div>
              <div class="md:col-span-2 text-right m-5 px-5">
                <div class="inline-flex items-end px-5">
                  <button
                    class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-8 rounded"
                  >
                    Annuler
                  </button>
                </div>
                <div class="inline-flex items-end px-5">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
                  >
                    Ajouter utilisateur
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"AddUser"
};
</script>

<style></style>
