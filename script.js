function volume_sphere() {
    //Write your code here
  const radius = document.getElementById("radius").value;
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume;
}
document.getElementById("submit").addEventListener("click", function (e) {
	e.preventDefault(); // Prevent form submission
    volume_sphere(); // Call the volume_sphere function
});

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
