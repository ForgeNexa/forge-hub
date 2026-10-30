package detector

import "testing"

func TestDetectInstalledApps(t *testing.T) {
	apps := DetectInstalledApps()
	if len(apps) != 4 {
		t.Fatalf("expected 4 tracked applications, got %d", len(apps))
	}

	foundIde := false
	for _, app := range apps {
		if app.ID == "forge-ide" {
			foundIde = true
			if app.Version != "0.2.1" {
				t.Fatalf("expected version 0.2.1 for forge-ide, got %s", app.Version)
			}
		}
	}
	if !foundIde {
		t.Fatalf("forge-ide not found in registry scan")
	}
}
