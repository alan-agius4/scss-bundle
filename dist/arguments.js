"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const Contracts = require("./contracts");
const verbosityValues = [];
for (const key in Contracts.Verbosity) {
    if (Number(key) % 1 !== 0) {
        verbosityValues.push(key);
    }
}
const DEDUPE_KEY = "dedupe";
exports.argv = yargs
    .help("h", "Show help.")
    .alias("h", "help")
    .version()
    .alias("v", "version")
    .config("config")
    .alias("c", "config")
    .options("e", {
    alias: "entry",
    describe: "Entry file.",
    type: "string"
})
    .options("d", {
    alias: "dest",
    describe: "Bundled file destination.",
    type: "string"
})
    .options("verbosity", {
    describe: "Verbosity of output.",
    choices: verbosityValues,
    default: Contracts.Verbosity[Contracts.Verbosity.Verbose]
})
    .options("includePaths", {
    describe: "Include paths for resolving imports.",
    type: "array"
})
    .array(DEDUPE_KEY)
    .default(DEDUPE_KEY, [], "[]")
    .usage("Usage: scss-bundle [options]")
    .string(["c", "e", "d"])
    .argv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJndW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FyZ3VtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUUvQix5Q0FBeUM7QUFFekMsTUFBTSxlQUFlLEdBQWEsRUFBRSxDQUFDO0FBQ3JDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBRWYsUUFBQSxJQUFJLEdBQUcsS0FBSztLQUNwQixJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQztLQUN2QixLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztLQUNsQixPQUFPLEVBQUU7S0FDVCxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztLQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDO0tBQ2hCLEtBQUssQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO0tBQ3BCLE9BQU8sQ0FBQyxHQUFHLEVBQUU7SUFDVixLQUFLLEVBQUUsT0FBTztJQUNkLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLElBQUksRUFBRSxRQUFRO0NBQ2pCLENBQUM7S0FDRCxPQUFPLENBQUMsR0FBRyxFQUFFO0lBQ1YsS0FBSyxFQUFFLE1BQU07SUFDYixRQUFRLEVBQUUsMkJBQTJCO0lBQ3JDLElBQUksRUFBRSxRQUFRO0NBQ2pCLENBQUM7S0FDRCxPQUFPLENBQUMsV0FBVyxFQUFFO0lBQ2xCLFFBQVEsRUFBRSxzQkFBc0I7SUFDaEMsT0FBTyxFQUFFLGVBQWU7SUFDeEIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7Q0FDNUQsQ0FBQztLQUNELE9BQU8sQ0FBQyxjQUFjLEVBQUU7SUFDckIsUUFBUSxFQUFFLHNDQUFzQztJQUNoRCxJQUFJLEVBQUUsT0FBTztDQUNoQixDQUFDO0tBQ0QsS0FBSyxDQUFDLFVBQVUsQ0FBQztLQUNqQixPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7S0FDN0IsS0FBSyxDQUFDLDhCQUE4QixDQUFDO0tBQ3JDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDdkIsSUFBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHlhcmdzIGZyb20gXCJ5YXJnc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgQ29udHJhY3RzIGZyb20gXCIuL2NvbnRyYWN0c1wiO1xyXG5cclxuY29uc3QgdmVyYm9zaXR5VmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xyXG5mb3IgKGNvbnN0IGtleSBpbiBDb250cmFjdHMuVmVyYm9zaXR5KSB7XHJcbiAgICBpZiAoTnVtYmVyKGtleSkgJSAxICE9PSAwKSB7XHJcbiAgICAgICAgdmVyYm9zaXR5VmFsdWVzLnB1c2goa2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgREVEVVBFX0tFWSA9IFwiZGVkdXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXJndiA9IHlhcmdzXHJcbiAgICAuaGVscChcImhcIiwgXCJTaG93IGhlbHAuXCIpXHJcbiAgICAuYWxpYXMoXCJoXCIsIFwiaGVscFwiKVxyXG4gICAgLnZlcnNpb24oKVxyXG4gICAgLmFsaWFzKFwidlwiLCBcInZlcnNpb25cIilcclxuICAgIC5jb25maWcoXCJjb25maWdcIilcclxuICAgIC5hbGlhcyhcImNcIiwgXCJjb25maWdcIilcclxuICAgIC5vcHRpb25zKFwiZVwiLCB7XHJcbiAgICAgICAgYWxpYXM6IFwiZW50cnlcIixcclxuICAgICAgICBkZXNjcmliZTogXCJFbnRyeSBmaWxlLlwiLFxyXG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCJcclxuICAgIH0pXHJcbiAgICAub3B0aW9ucyhcImRcIiwge1xyXG4gICAgICAgIGFsaWFzOiBcImRlc3RcIixcclxuICAgICAgICBkZXNjcmliZTogXCJCdW5kbGVkIGZpbGUgZGVzdGluYXRpb24uXCIsXHJcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgfSlcclxuICAgIC5vcHRpb25zKFwidmVyYm9zaXR5XCIsIHtcclxuICAgICAgICBkZXNjcmliZTogXCJWZXJib3NpdHkgb2Ygb3V0cHV0LlwiLFxyXG4gICAgICAgIGNob2ljZXM6IHZlcmJvc2l0eVZhbHVlcyxcclxuICAgICAgICBkZWZhdWx0OiBDb250cmFjdHMuVmVyYm9zaXR5W0NvbnRyYWN0cy5WZXJib3NpdHkuVmVyYm9zZV1cclxuICAgIH0pXHJcbiAgICAub3B0aW9ucyhcImluY2x1ZGVQYXRoc1wiLCB7XHJcbiAgICAgICAgZGVzY3JpYmU6IFwiSW5jbHVkZSBwYXRocyBmb3IgcmVzb2x2aW5nIGltcG9ydHMuXCIsXHJcbiAgICAgICAgdHlwZTogXCJhcnJheVwiXHJcbiAgICB9KVxyXG4gICAgLmFycmF5KERFRFVQRV9LRVkpXHJcbiAgICAuZGVmYXVsdChERURVUEVfS0VZLCBbXSwgXCJbXVwiKVxyXG4gICAgLnVzYWdlKFwiVXNhZ2U6IHNjc3MtYnVuZGxlIFtvcHRpb25zXVwiKVxyXG4gICAgLnN0cmluZyhbXCJjXCIsIFwiZVwiLCBcImRcIl0pXHJcbiAgICAuYXJndiBhcyBDb250cmFjdHMuQXJndW1lbnRzVmFsdWVzO1xyXG4iXX0=