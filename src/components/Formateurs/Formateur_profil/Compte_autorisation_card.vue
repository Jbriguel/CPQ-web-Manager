<template> 
          <div class="w-full max-w-full px-3 xl:w-4/12">
            <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 class="mb-0">Paramètres de compte et autorisations </h6>
              </div>
              <div class="flex-auto p-4">
                <h6 class="font-bold leading-tight uppercase text-xs text-slate-500">Account</h6>
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                  <li class="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                    <div class="min-h-6 mb-0.5 block pl-0">
                      <input id="follow" class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox"  checked />
                      <label for="follow" class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"  >Gestion des cours </label>
                    </div>
                  </li>
                  <li class="relative block px-0 py-2 bg-white border-0 text-inherit">
                    <div class="min-h-6 mb-0.5 block pl-0">
                      <input id="answer" class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                      <label for="answer" class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"  >Gestion du profil </label>
                    </div>
                  </li>
                  <li class="relative block px-0 py-2 bg-white border-0 rounded-b-lg text-inherit">
                    <div class="min-h-6 mb-0.5 block pl-0">
                      <input id="mention" class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" checked />
                      <label for="mention" class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500" >Accès aux données et statistiques</label>
                    </div>
                  </li>
                 
                  <li class="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                    <div class="min-h-6 mb-0.5 block pl-0">
                      <input id="launches projects" class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                      <label for="launches projects" class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500" >Interaction avec les étudiants </label>
                    </div>
                  </li>
                  <li class="relative block px-0 py-2 bg-white border-0 text-inherit">
                    <div class="min-h-6 mb-0.5 block pl-0">
                      <input id="product updates" class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" checked />
                      <label for="product updates" class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"  >Création de quiz ou d'évaluations</label>
                    </div>
                  </li>
                  <li class="relative block px-0 py-2 pb-0 bg-white border-0 rounded-b-lg text-inherit">
                    <div class="min-h-6 mb-0.5 block pl-0">
                      <input id="subscribe" class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                      <label for="subscribe" class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"  >Autorisation de publication de cours</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
           
</template>

<script>
export default {
    name:"Compte&AutorisationCard"

}
</script>

<style>

</style>