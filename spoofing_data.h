#ifndef _SPOOFING_DATA_H
#define _SPOOFING_DATA_H

#include <linux/types.h>

// Structure for randomized hardware data
struct spoofed_hw {
    char cpu_vendor[32];
    char cpu_model[64];
    unsigned long mem_total;
    char hdd_serial[32];
    char mac_addr[18];
    char gpu_model[64];
    char bios_version[32];
    char motherboard[64];
};

// Hardware generation modes
enum SPOOF_MODE {
    LIGHT_SPOOF = 0,    // Minimal changes
    MEDIUM_SPOOF = 1,   // Moderate changes
    FULL_SPOOF = 2      // Complete hardware identity change
};

// Function prototypes
void generate_spoofed_data(struct spoofed_hw *data, enum SPOOF_MODE mode);
void randomize_string(char *dest, size_t len, const char *prefix);
void generate_fake_mac(char *mac);
void generate_fake_serial(char *serial);

#endif // _SPOOFING_DATA_H