<script lang="ts">
  let teamName = ''
  let error = ''
</script>

<main>
  <form class="form-container" on:submit={(e) => {
    e.preventDefault()
    if (teamName.length === 0) error = 'Du må sette et team navn'
    else error = ''
  }}>
    <div class="input-container">
      <label for="teamName">Team navn</label>
      <input type="text" id="teamName" bind:value={teamName}>
    </div>  

    {#if error}
      <p>{error}</p>
    {/if}

    <button class="submit-button" type="submit">Registrer team</button>
  </form>
</main>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    gap: 1rem;
  }
  .input-container {
    display: flex;
    flex-direction: column;
  }
  .submit-button {
    max-width: fit-content;
  }
</style>

