package detector

import (
	"os/exec"
	"runtime"
)

// AppInfo represents an installed ForgeNexa ecosystem application.
type AppInfo struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	Installed bool   `json:"installed"`
	Version   string `json:"version"`
	ExecPath  string `json:"execPath,omitempty"`
	Status    string `json:"status"` // healthy, update-available, not-found
}

// DetectInstalledApps scans the operating system for ForgeNexa tools.
func DetectInstalledApps() []AppInfo {
	apps := []AppInfo{
		{ID: "forge-ide", Name: "Forge IDE", Version: "0.2.1"},
		{ID: "forge-api", Name: "Forge API", Version: "0.1.0"},
		{ID: "forge-terminal", Name: "Forge Terminal", Version: "0.1.0"},
		{ID: "forge-git", Name: "Forge Git", Version: "0.1.0"},
	}

	for i, app := range apps {
		binName := app.ID
		if runtime.GOOS == "windows" {
			binName += ".exe"
		}
		if path, err := exec.LookPath(binName); err == nil {
			apps[i].Installed = true
			apps[i].ExecPath = path
			apps[i].Status = "healthy"
		} else {
			// In development mode or uninstalled state
			apps[i].Installed = false
			apps[i].Status = "not-found"
		}
	}

	return apps
}
