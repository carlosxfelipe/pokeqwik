import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal(1);
  const showBackImage = useSignal(false);
  const isPokemonVisible = useSignal(false);

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;

    pokemonId.value += value;
  });

  return (
    <>
      <span class="text-2xl">Quem é esse Pokémon?</span>
      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage id={pokemonId.value} backImage={showBackImage.value} isVisible={isPokemonVisible.value} />

      <div class="mt-2">
        <buton
          onClick$={() => changePokemonId(-1)}
          class="btn btn-primary mr-2"
        >
          Anterior
        </buton>
        <buton
          onClick$={() => changePokemonId(+1)}
          class="btn btn-primary mr-2"
        >
          Próximo
        </buton>
        <buton
          onClick$={() => (showBackImage.value = !showBackImage.value)}
          class="btn btn-primary mr-2"
        >
          Virar
        </buton>
        <buton
          onClick$={() => (isPokemonVisible.value = !isPokemonVisible.value)}
          class="btn btn-primary"
        >
          {isPokemonVisible.value ? "Mostrar" : "Ocultar" }
        </buton>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "Quem é esse Pokémon?",
    },
  ],
};
