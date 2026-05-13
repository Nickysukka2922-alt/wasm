var emulator = new V86({
    wasm_path: "core/v86.wasm",
    screen_container: document.getElementById("screen_container"),
    bios: { url: "core/seabios.bin" },
    vga_bios: { url: "core/vgabios.bin" },
    cdrom: { url: "core/myos.iso" },
    autostart: true,
});
