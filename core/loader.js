var emulator = new V86({
    wasm_path: "path/to/v86.wasm",
    screen_container: document.getElementById("screen_container"),
    bios: { url: "path/to/seabios.bin" },
    vga_bios: { url: "path/to/vgabios.bin" },
    cdrom: { url: "path/to/linux.iso" },
    autostart: true,
});
