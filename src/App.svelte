<script lang="ts">
  let teamName = ''
</script>

<main>
  <form class="form-container" on:submit={(e) => {
    e.preventDefault()
    console.log(teamName)
  }}>
    <div class="input-container">
      <label for="teamName">Team navn</label>
      <input type="text" id="teamName" bind:value={teamName}>
    </div>  
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

